# 10조 🦁 멋쟁이 사자처럼 Front-End School Plus 1기: 미니 프로젝트(TODO App)

1️⃣ 1차 JS 프로젝트 팀원 : [👑 정소이](https://github.com/uniS2/FESP01-JS-Project10), [전선용](https://github.com/sy0725), [정명진](https://github.com/jungmyungjin), [정소희](https://github.com/haha41)

- 🐼 GitHub URL: (https://github.com/uniS2/FESP01-JS-Project10)

- 🎨 디자인 시안 : [Figma](https://www.figma.com/file/6gI7VgNfHjo6CKSqypsdX2/Untitled?type=design&node-id=0%3A1&mode=design&t=muOah9kJpVhcm727-1)

<img src= ./todo.png alt="프로젝트 결과물" style="display: block; margin: 0 auto; width:300px">

### 🎯 목표

- 2일 동안 바닐라 자바스크립트로 투두리스트를 만들자!
- 페어프로그래밍으로 진행을 하면서 페어 프로그래밍 경험을 기르자!

### 진행 방식

- 2인 1조 페어프로그래밍
- A-B, C-D 가 짝이었다면 화요일에는 A-D, C-B 가 짝이되도록 로테이션

### 일정

- **1일차(10/30)**

  - **`정소이, 정소희`** : 등록 페이지 마크업 및 스타일링
  - **`전선용, 정명진`** : 메인 페이지 마크업 및 스타일링

- **2일차(10/31)**

  - **`정소이, 전선용`** : 리스트 렌더링 - 맨 상단 추가, 할일완료 - 취소선, 맨 하단 정렬
  - **`정명진, 정소희`** : 상세조회 - 토글, 조회 내 수정, 삭제 기능

### ⚙️ 상세 기능

- todolist 조회
- todolist 생성
- todolist 수정
- todolist 삭제

## 💻 서버 구동

- 프로젝트 루트에서 실행

```
cd 01.javascript/todoapp
npx serve -s .
```

- http://localhost:3000 접속
- 이미 3000 포트가 사용중일 경우 콘솔 안내 메세지에 따라서 접속

## 🌐 api 서버 구동

- 프로젝트 루트에서 실행

```
cd api
npm i
npm start
```

- api 서버 사용방법: http://localhost:33088/apidocs
