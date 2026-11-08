# 수호의 영어 DT 대모험

초등 1학년 수호의 영어학원 DT 시험 대비용 학습 웹앱 (갤럭시 탭 S7 + S펜에 맞춤).
**서비스 주소: https://suho-english-dt.vercel.app** (로그인·설치 필요 없음)

`index.html` 한 파일에 앱 전체가 들어 있어요. 빌드 과정 없이 Vercel 정적 사이트로 배포해요.

## 내용
- **DT 문장 연습** (DSB1 DT Preview): Do you like ~? / Can you play ~? / How much is it? / What did you eat? / What are you doing? — 5단원 26문제
  - 📖 듣고 배우기 · 🧩 단어 고르기 · ✏️ 펜으로 써보기 · 🏆 실전 DT 도전(랜덤 10문제 / 전체 26문제)
- **단어 암기** (DT REVIEW VOCAB LIST 27개): 9개씩 3묶음 + 전체
  - 🃏 카드 → 영어→한글 → 한글→영어 → 🔤 철자 맞추기 → ✏️ 펜으로 쓰기, ❗ 틀린 단어 다시
- 펜 쓰기: 영어 4줄 노트, 따라쓰기 힌트, 펜 색 8가지(흰색 포함), 칠판/종이 배경, 부분 지우개, 되돌리기, 펜만 쓰기(손바닥 방지)
- 정답 확인: 정답을 내 글씨 위에 초록 테두리 글자로 겹쳐 보여줌
- 화면 크기 자동 맞춤 + －/＋ 직접 조절
- 별 ⭐ 10개마다 스티커, 기록은 기기 브라우저(localStorage)에 저장
- 발음: 브라우저 음성(TTS, en-US / ko-KR)

## 고친 것
- 펜으로 써보기 빈 화면: 버튼의 `write()`가 브라우저 내장 `document.write`로 실행되던 문제 → 함수 이름 `writeSent`로 변경

- 아이패드(크롬·사파리 모두 WebKit) + Apple Pencil: 손글씨 입력(Scribble)을 켜 두면 빠르게 이어 쓰는 획이 사라짐 → 쓰는 칸에서 touchstart/touchmove 기본 동작을 막아 우회 (WebKit bug 217430)
- 펜·손 터치 구분: 지금 쓰는 펜(pointerId)의 신호로만 획을 시작/끝냄. 손으로 쓰는 중 펜이 닿으면 손 자국을 지우고 펜으로 전환

## 배포
GitHub `main`에 푸시하면 Vercel이 자동 배포해요. (Framework: Other, 빌드 명령 없음, 출력 폴더 루트)
