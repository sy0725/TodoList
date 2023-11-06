// 할일 등록
import axios from "axios";
import "./TodoRegist.css";

import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { linkTo } from "../../Router";

const TodoRegist = function () {
  const page = document.createElement("div");
  const detailPage = document.createElement("form");
  const title = document.createElement("input");
  const detail = document.createElement("textarea");
  const btnWrapper = document.createElement("div");
  const btnAdd = document.createElement("button");
  const btnAddTodo = document.createTextNode("등록");
  const btnCancle = document.createElement("button");
  const btnCancleTodo = document.createTextNode("취소");

  page.setAttribute("id", "page");
  page.setAttribute("class", "detailPage");
  detailPage.setAttribute("id", "detailForm");
  title.setAttribute("id", "title");
  title.setAttribute("type", "text");
  title.setAttribute("placeholder", "할일을 입력하세요.");
  detail.setAttribute("placeholder", "상세 내용을 입력하세요.");
  detail.setAttribute("id", "detail");
  btnAdd.setAttribute("id", "btnAdd");
  btnCancle.setAttribute("id", "btnCancle");
  btnWrapper.setAttribute("id", "divWrapper");

  page.appendChild(Header("Make Your Plan"));
  page.appendChild(detailPage);
  detailPage.appendChild(title);
  detailPage.appendChild(detail);
  detailPage.appendChild(btnWrapper);
  btnAdd.appendChild(btnAddTodo);
  btnWrapper.appendChild(btnAdd);
  btnCancle.appendChild(btnCancleTodo);
  btnWrapper.appendChild(btnCancle);
  page.appendChild(Footer());
  
  const instance = axios.create({
    baseURL: "http://localhost:33088/api",
    headers: {
      "Content-Type": "application/json",
    },
  });

  btnAdd.addEventListener("click", async function (e) {
    e.preventDefault();
    if (!title.value) {
      alert("할일을 입력해주세요!");
    }

    await instance
      .post("/todolist", {
        title: title.value,
        content: detail.value || "상세 내용이 없습니다.",
      })
      .then(function () {
        linkTo("/");
      })
      .catch(function (error) {
        if (error instanceof Error) {
          console.error(error);
        }
      });
  });

  btnCancle.addEventListener("click", (e) => {
    e.preventDefault();
    linkTo("/");
  });

  return page;
};

export default TodoRegist;
