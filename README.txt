/ 초기 설정 /
1. npm 설치하기
2. tailwindcss 설정
3. next auth 설정 
4. .env 환경변수 설정
5. components 폴더 만들기

/ 시작 단계 / 
1. Header 컴포넌트 만든다

2. signin 에서 getServerSideProps를 이용해서 Providers 를 받는다.
Providers로 google 인증에 필요한 데이터를 렌더링한다. SignIn 함수를 이용해서 
버튼에 할당하면 클릭 시, User 컴포넌트의 session 객체가 활성화 되어 사용자 프로필이
메인페이지에 표시된다. session 유무로 프로필 화면이 동적으로 변한다.  

3.


Q1. Google Search, I'm Feeling Lucky width 가 안맞았던 이유는 (500px에서)
  flex-col 상태에서 items-center를 하면 가로 너비가 최대 수축하기 떄문에 안맞았던것



