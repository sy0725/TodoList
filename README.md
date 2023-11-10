# 10조 🦁 멋쟁이 사자처럼 Front-End School Plus 1기: 미니 프로젝트(TODO App)

1️⃣ [1차 JS 프로젝트](./01.javascript)

2️⃣ [2차 TS 프로젝트](https://github.com/uniS2/FESP01-TodoApp-Project10.git)

# FESP01-TodoApp-Project10

> **3️⃣ 3차 React 프로젝트 팀원 : [안태욱](https://github.com/dotory0829), [오나영](https://github.com/ony540), [정소이](https://github.com/uniS2)** <br/> **개발기간: 2023.11.10**

> 🐼 **GitHub URL**: [FESP01-TodoApp-Project10
> ](https://github.com/FESP01-TodoApp-Project10/FESP01-TodoApp-Project10.git) <br>

> 🎨 **디자인 시안** : [Figma 시안/UI](https://www.figma.com/file/Cezc3Sq6bW4lNBheti0LcP/Todolist?type=design&node-id=0%3A1&mode=design&t=9WktcFoN3dGYZnVK-1) <br>

## 목표 🎯

- 1일 동안 리액트로 투두리스트를 리팩토링하자!
- 페어프로그래밍으로 진행을 하면서 페어 프로그래밍 경험을 기르자!

## 프로젝트 소개

1. 기존 TypeScript 작업에서 React를 반영한 React + TypeScript 작업으로 리팩토링하는 프로젝트입니다.
2. 프로젝트 구성은 `CRA` 프로젝트 생성을 통해 TypeScript를 적용하였습니다. (기본 패키지 사용)
3. `Styled Components` 라이브러리를 이용하여 사용자 UI 디자인을 변경하였습니다.
4. `react-router-dom`에 내장되어 있는 `BrowserRouter` 컴포넌트를 통해 라우터 기능을 구현하였습니다.
5. `Axios` 통한 데이터 CRUD 작업을 진행하였습니다.
6. `Prettier` 설정을 통해 포맷팅을 지원하였습니다.

#### 일정 📅

- **`오나영, 정소이`** : 메인페이지 리팩토링 주작업
- **`안태욱`** : 등록페이지 리팩토링 주작업

#### 진행 방식

- 2인 1조 페어프로그래밍 변형
- A드라이버, B 네비게이터와 C 드라이버로 구성

## 시작 가이드

### 개발 서버 실행 💻

- 프로젝트 루트에서 실행

```
$ cd 03.react
$ npm start
```

- 출력된 접속 정보 확인해서 개발 서버 접속
  - 기본 포트는 5173으로 구동되고 해당 포트가 사용중일 경우 번호가 하나씩 증가
  - http://localhost:5173/
- HMR (Hot Module Replacement) 지원됨

### api 서버 구동 🌐

- 프로젝트 루트에서 실행

```
$ cd 02.javascript/api
$ npm i
$ npm start
```

- api 서버 사용방법: http://localhost:33088/apidocs

---

## 화면 구성 📺

|       메인 페이지       |           등록 페이지           |
| :---------------------: | :-----------------------------: |
| ![MainPage](./todo.png) | ![RegistPage](./todoRegist.png) |

---

## 주요 기능 ⚙️

- todolist 조회
- todolist 생성
- todolist 수정
- todolist 삭제
- todolist 전체삭제

---

## 아키텍처

## 디렉토리 구조 📂

```
📦src
 ┣ 📂API
 ┃ ┗ 📜axios.ts
 ┣ 📂component
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜Footer.tsx
 ┃ ┃ ┗ 📜Header.tsx
 ┃ ┗ 📂updatePage
 ┃ ┃ ┗ 📜TodoUpdate.tsx
 ┣ 📂pages
 ┃ ┣ 📂errorPage
 ┃ ┃ ┗ 📜Error404.tsx
 ┃ ┣ 📂mainPage
 ┃ ┃ ┗ 📜TodoListMain.tsx
 ┃ ┣ 📂registPage
 ┃ ┃ ┣ 📜TodoRegist.tsx
 ┃ ┃ ┗ 📜TodoRegistSettings.ts
 ┃ ┣ 📜RootLayout.tsx
 ┃ ┗ 📜Router.tsx
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┣ 📜reportWebVitals.ts
 ┣ 📜setupTests.ts
 ┗ 📜todoapp.d.ts
```
