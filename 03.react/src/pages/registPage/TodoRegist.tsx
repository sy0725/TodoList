import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const TodoRegist = () => {
  const navigate = useNavigate();
  const moveToBack = () => {
    navigate(-1);
  };
  return (
    <>
      <StyledButton onClick={moveToBack}>뒤로가기</StyledButton>
      <h1>등록 페이지: 등록 기능</h1>
      <h2>
        <ul>
          <li>메인 페이지: 등록페이지로 이동, 수정, 삭제</li>
          <li>등록 페이지: 등록만</li>
        </ul>
      </h2>
    </>
  );
};

const StyledButton = styled.button`
  width: 100px;
  background-color: red;
  color: white;
`;

// // 할일 등록
// import "./TodoRegist.css";

// import Header from "../../layout/Header";
// import Footer from "../../layout/Footer";
// import { linkTo } from "../../Router";
// import { postTodoItem } from "../../API/axios";

// const TodoRegist = function () {
//   const page = document.createElement("div");
//   const detailPage = document.createElement("form");
//   const title = document.createElement("input");
//   const detail = document.createElement("textarea");
//   const btnWrapper = document.createElement("div");
//   const btnAdd = document.createElement("button");
//   const btnAddTodo = document.createTextNode("등록");
//   const btnCancle = document.createElement("button");
//   const btnCancleTodo = document.createTextNode("취소");

//   page.setAttribute("id", "page");
//   page.setAttribute("class", "detailPage");
//   detailPage.setAttribute("id", "detailForm");
//   title.setAttribute("id", "title");
//   title.setAttribute("type", "text");
//   title.setAttribute("placeholder", "할일을 입력하세요.");
//   detail.setAttribute("placeholder", "상세 내용을 입력하세요.");
//   detail.setAttribute("id", "detail");
//   btnAdd.setAttribute("id", "btnAdd");
//   btnCancle.setAttribute("id", "btnCancle");
//   btnWrapper.setAttribute("id", "divWrapper");

//   page.appendChild(Header("Make Your Plan"));
//   page.appendChild(detailPage);
//   detailPage.appendChild(title);
//   detailPage.appendChild(detail);
//   detailPage.appendChild(btnWrapper);
//   btnAdd.appendChild(btnAddTodo);
//   btnWrapper.appendChild(btnAdd);
//   btnCancle.appendChild(btnCancleTodo);
//   btnWrapper.appendChild(btnCancle);
//   page.appendChild(Footer());

//   btnAdd.addEventListener("click", async function (e) {
//     e.preventDefault();
//     if (!title.value) {
//       alert("할일을 입력해주세요!");
//     }

//     const body = {
//       title: title.value,
//       content: detail.value || "상세 내용이 없습니다.",
//     };

//     postTodoItem(body)
//       .then(function () {
//         linkTo("/");
//       })
//       .catch(function (error) {
//         if (error instanceof Error) {
//           console.error(error);
//         }
//       });
//   });

//   btnCancle.addEventListener("click", (e) => {
//     e.preventDefault();
//     linkTo("/");
//   });

//   return page;
// };

// export default TodoRegist;
