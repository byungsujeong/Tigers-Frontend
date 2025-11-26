# Tigers-Frontend

금융 뉴스 AI 분석 서비스의 프론트엔드 우선 개발 전략과 API 계약을 정리한 문서는 `docs/frontend-strategy.md`에 있습니다.

프로젝트를 어디서부터 시작할지 막막하다면, 1주일 안에 기본 흐름을 완성하기 위한 작업 순서와 체크리스트를 `docs/development-roadmap.md`에서 확인하세요.

## 프론트 첫 기능 데모 실행하기

빌드나 패키지 설치 없이도 `demo/index.html`을 브라우저에서 열면 바로 모의(MOCK) 분석 흐름을 체험할 수 있습니다.

1. 로컬에서 정적 서버를 켜고 접속합니다.
   ```bash
   npx serve demo -l 4173
   ```
   → 접속: http://localhost:4173

   (또는 파일을 직접 더블 클릭해도 되지만, 정적 서버를 권장합니다.)

2. 기사 텍스트를 붙여넣고 **분석 요청**을 누르면, Mock API가 감정과 핵심 포인트를 표시합니다. 추후 FastAPI 실제 API 엔드포인트로 교체 예정입니다.
