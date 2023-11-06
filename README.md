# 10조 🦁 멋쟁이 사자처럼 Front-End School Plus 1기: 미니 프로젝트(TODO App)

1️⃣ [1차 JS 프로젝트](./01.javascript/README.md)

2️⃣ 2차 TS 프로젝트 팀원 : [👑 정소이](https://github.com/uniS2), [이수아](https://github.com/suconpa), [장현주](https://github.com/hyeonjuuu)

- 🐼 GitHub URL: (https://github.com/uniS2/FESP01-TodoApp-Project10.git)

- 🎨 디자인 시안 : [Figma 시안/UI](https://www.figma.com/file/Cezc3Sq6bW4lNBheti0LcP/Todolist?type=design&node-id=0%3A1&mode=design&t=9WktcFoN3dGYZnVK-1)

<img src= ./todo.png alt="프로젝트 메인페이지 결과물" style="display: inline; margin: 0 auto; width:300px">
<img src= ./todoRegist.png alt="프로젝트 등록페이지 결과물" style="display: inline; margin-bottom: 180px; width:260px">

## 🎯 목표

- 1일 동안 타입스크립트로 투두리스트를 리팩토링하자!
- 페어프로그래밍으로 진행을 하면서 페어 프로그래밍 경험을 기르자!

## 진행 방식

- 2인 1조 페어프로그래밍 변형
- A, B 드라이버와 C 네비게이터로 구성

## 일정

- **1일차(11/06)**

  - **`공통`** : axios 모듈화
  - **`이수아, 정소이`** : 등록 페이지 리팩토링 (모듈화)
  - **`장현주, 정소이`** : 메인 페이지 리팩토링 (모듈화)

## 프로젝트 구조

```
📦src
 ┣ 📂API
 ┃ ┗ 📜axios.ts
 ┣ 📂layout
 ┃ ┣ 📜Footer.ts
 ┃ ┗ 📜Header.ts
 ┣ 📂pages
 ┃ ┣ 📂errors
 ┃ ┃ ┗ 📜Error404.ts
 ┃ ┣ 📂info
 ┃ ┃ ┗ 📜TodoInfo.ts
 ┃ ┣ 📂list
 ┃ ┃ ┗ 📜TodoList.ts
 ┃ ┣ 📂regist
 ┃ ┃ ┣ 📜TodoRegist.css
 ┃ ┃ ┗ 📜TodoRegist.ts
 ┃ ┗ 📂update
 ┃ ┃ ┗ 📜TodoUpdate.ts
 ┣ 📜App.ts
 ┣ 📜index.css
 ┣ 📜index.ts
 ┣ 📜Router.ts
 ┣ 📜todoapp.d.ts
 ┗ 📜vite-env.d.ts
```

## ⚙️ 상세 기능

- todolist 조회
- todolist 생성
- todolist 수정
- todolist 삭제
- todolist 전체삭제

## 💻 개발 서버 실행

- 프로젝트 루트에서 실행

```
cd 02.javascript
npm run dev
```

- 출력된 접속 정보 확인해서 개발 서버 접속
  - 기본 포트는 5173으로 구동되고 해당 포트가 사용중일 경우 번호가 하나씩 증가
  - http://localhost:5173/
- HMR (Hot Module Replacement) 지원됨

## 🌐 api 서버 구동

- 프로젝트 루트에서 실행

```
cd 02.javascript/api
npm i
npm start
```

- api 서버 사용방법: http://localhost:33088/apidocs
