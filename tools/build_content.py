#!/usr/bin/env python3
"""data/sets/*.json 을 검사하고 data/content.js 와 standalone.html 을 만든다.

사용법:  python3 tools/build_content.py
- 오류가 있으면 아무 파일도 바꾸지 않고 종료 코드 1로 끝난다.
- 세트 순서: 파일 안의 "added"(YYYY-MM-DD) 오름차순. 앱은 마지막(가장 최근) 세트를 기본으로 연다.
"""
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SETS_DIR = ROOT / "data" / "sets"
COLORS = {"var(--c1)", "var(--c2)", "var(--c3)", "var(--c4)", "var(--c5)"}
BLANK = re.compile(r"\{([^}]+)\}")
# 이미 별 기록이 쌓여서 단원 id 를 바꾸지 않는 예전 세트 (접두사 경고 제외)
LEGACY_UNIT_IDS = {"2026-11-dsb1"}


def check(sets):
    errors, warns = [], []
    seen_set, seen_unit, seen_prefix = set(), set(), {}
    for s in sets:
        sid = s.get("id", "?")
        where = f"[{sid}]"
        for key in ("id", "title", "ko", "added", "units"):
            if not s.get(key) and key != "units":
                errors.append(f"{where} '{key}' 가 비어 있음")
        if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", str(s.get("added", ""))):
            errors.append(f"{where} added 는 YYYY-MM-DD 형식이어야 함")
        if sid in seen_set:
            errors.append(f"{where} 세트 id 중복")
        seen_set.add(sid)
        alt = s.get("alt", {})
        if not s.get("units") and not s.get("vocab"):
            errors.append(f"{where} 문장(units)도 단어(vocab)도 없음")
        for u in s.get("units", []):
            uw = f"{where} 단원 '{u.get('id')}'"
            for key in ("id", "emoji", "title", "ko", "tip", "items"):
                if not u.get(key):
                    errors.append(f"{uw}: '{key}' 가 비어 있음")
            if u.get("id") in seen_unit:
                errors.append(f"{uw}: 단원 id 가 다른 단원과 겹침 (별 기록이 섞임)")
            seen_unit.add(u.get("id"))
            uid = str(u.get("id") or "")
            if "-" not in uid:
                if sid not in LEGACY_UNIT_IDS:
                    warns.append(f"{uw}: 단원 id 에 세트 접두사가 없음 — 'd12-{uid or 'like'}' 처럼 "
                                 f"세트마다 다른 접두사를 붙이세요 (별 기록이 단원 id 로 저장됨)")
            else:
                prefix = uid.split("-", 1)[0]
                owner = seen_prefix.setdefault(prefix, sid)
                if owner != sid:
                    warns.append(f"{uw}: 접두사 '{prefix}-' 를 세트 [{owner}] 가 이미 쓰고 있음 — "
                                 f"이 세트만의 접두사로 바꾸세요")
            if u.get("color") not in COLORS:
                errors.append(f"{uw}: color 는 {sorted(COLORS)} 중 하나")
            pool = u.get("pool", [])
            for k, it in enumerate(u.get("items", [])):
                iw = f"{uw} 문제 {k + 1}"
                for key in ("pic", "q", "a"):
                    if not it.get(key):
                        errors.append(f"{iw}: '{key}' 가 비어 있음")
                blanks = BLANK.findall(it.get("a", ""))
                if not blanks:
                    errors.append(f"{iw}: 답(a)에 {{빈칸}} 이 하나도 없음")
                for b in blanks:
                    choices = alt.get(b) or [w for w in pool if w != b]
                    if not choices:
                        errors.append(f"{iw}: 빈칸 '{b}' 의 오답 보기가 없음 (pool 또는 alt 에 추가)")
                    elif len(choices) < 2:
                        warns.append(f"{iw}: 빈칸 '{b}' 의 오답 보기가 1개뿐")
                if it.get("yn") not in (None, "👍", "👎"):
                    errors.append(f"{iw}: yn 은 👍 또는 👎")
        seen_en = set()
        for k, v in enumerate(s.get("vocab", [])):
            vw = f"{where} 단어 {k + 1}"
            for key in ("en", "ko", "pic"):
                if not v.get(key):
                    errors.append(f"{vw}: '{key}' 가 비어 있음")
            if v.get("en") in seen_en:
                errors.append(f"{vw}: '{v.get('en')}' 중복")
            seen_en.add(v.get("en"))
            if "-" in v.get("en", "") and not v.get("past"):
                warns.append(f"{vw}: '{v['en']}' 는 현재-과거 형태인데 past(과거 뜻)가 없음")
        if 0 < len(s.get("vocab", [])) < 4:
            warns.append(f"{where} 단어가 4개 미만이면 고르기 보기가 부족함")
    return errors, warns


def main():
    files = sorted(SETS_DIR.glob("*.json"))
    sets = []
    for f in files:
        try:
            sets.append(json.loads(f.read_text(encoding="utf8")))
        except json.JSONDecodeError as e:
            print(f"❌ {f.name}: JSON 형식 오류 — {e}")
            return 1
    sets.sort(key=lambda s: (s.get("added", ""), s.get("id", "")))
    errors, warns = check(sets)
    for w in warns:
        print("⚠️ ", w)
    if errors:
        for e in errors:
            print("❌", e)
        print(f"\n오류 {len(errors)}개 — 파일을 만들지 않았어요.")
        return 1

    js = ("/* 자동 생성 파일 — 직접 고치지 말고 data/sets/*.json 을 고친 뒤 "
          "python3 tools/build_content.py 실행 */\n"
          "window.DT_SETS = " + json.dumps(sets, ensure_ascii=False, indent=1) + ";\n")
    (ROOT / "data" / "content.js").write_text(js, encoding="utf8")

    html = (ROOT / "index.html").read_text(encoding="utf8")
    tag = '<script src="data/content.js"></script>'
    assert tag in html, "index.html 에 data/content.js 스크립트 태그가 없음"
    (ROOT / "standalone.html").write_text(html.replace(tag, "<script>\n" + js + "</script>"), encoding="utf8")

    for s in sets:
        n = sum(len(u["items"]) for u in s.get("units", []))
        print(f"✅ {s['id']}: {s['ko']} ({s['title']}) — 단원 {len(s.get('units', []))}개 · 문장 {n}문제 · 단어 {len(s.get('vocab', []))}개")
    print(f"\n세트 {len(sets)}개 → data/content.js, standalone.html 만들었어요. 앱 기본 세트: {sets[-1]['id']}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
