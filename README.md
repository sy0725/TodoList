# 10조 🦁 멋쟁이 사자처럼 Front-End School Plus 1기: 미니 프로젝트(TODO App)

> 1️⃣ [1차 JS 프로젝트](./01.javascript) <br> 2️⃣ [2차 TS 프로젝트](https://github.com/uniS2/FESP01-TodoApp-Project10.git)

# FESP01-TodoApp-Project10

> **3️⃣ 3차 React 프로젝트 팀원 : [안태욱](https://github.com/dotory0829), [오나영](https://github.com/ony540), [정소이](https://github.com/uniS2)** <br/> **개발기간: 2023.11.10**

> 🐼 **GitHub URL**: [FESP01-TodoApp-Project10
> ](https://github.com/FESP01-TodoApp-Project10/FESP01-TodoApp-Project10.git) <br>

> 🎨 **디자인 시안** : [Figma 시안/UI](https://www.figma.com/file/Cezc3Sq6bW4lNBheti0LcP/Todolist?type=design&node-id=0%3A1&mode=design&t=9WktcFoN3dGYZnVK-1) <br>

<br>

## 목표 🎯

- 1일 동안 리액트로 투두리스트를 리팩토링하자!
- 페어프로그래밍으로 진행을 하면서 페어 프로그래밍 경험을 기르자!

<br>

## 프로젝트 소개

- 기존 TypeScript 작업에서 React를 반영한 React + TypeScript 작업으로 리팩토링하는 프로젝트입니다.

- 프로젝트 구성은 `CRA` 프로젝트 생성을 통해 TypeScript를 적용하였습니다. (기본 패키지 사용)

- `Styled Components` 라이브러리를 이용하여 사용자 UI 디자인을 변경하였습니다.

- react-router-dom에 내장되어 있는 `BrowserRouter` 컴포넌트를 통해 라우터 기능을 구현하였습니다.

- `Axios` 통한 데이터 CRUD 작업을 진행하였습니다.

- `Prettier` 설정을 통해 포맷팅을 지원하였습니다.

#### 일정 📅

- **`오나영, 정소이`** : 메인페이지 리팩토링 주작업
- **`안태욱`** : 등록페이지 리팩토링 주작업

#### 진행 방식

- 2인 1조 페어프로그래밍 변형
- A드라이버, B 네비게이터와 C 드라이버로 구성
  
---

<br>

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

<br>

## Stacks 🐈

### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### Config

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

### Development

![createreactapp](https://img.shields.io/badge/createreactapp-09D3AC?style=for-the-badge&logo=createreactapp&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white) <br>
![styledcomponents](https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white)
![reactrouter](https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![axios](https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![prettier](https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)

### Communication

![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=Discord&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white)

<br>

## 화면 구성 📺

|       메인 페이지       |           등록 페이지           |
| :---------------------: | :-----------------------------: |
| ![MainPage](./todo.png) | ![RegistPage](./todoRegist.png) |

<br>

## 주요 기능 ⚙️

### 1. 메인페이지

- todolist 조회
- todolist 완료/미완료 체크
- todolist 수정
- todolist 삭제
- todolist 전체삭제

### 2. 등록페이지

- todolist 생성

<br>

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

<br>

[⬆️ 상단으로 이동](#10조-🦁-멋쟁이-사자처럼-front-end-school-plus-1기-미니-프로젝트todo-app)
