// 할일 등록
import Header from "../../layout/Header.js";
import Footer from "../../layout/Footer.js";

const TodoRegist = function () {
  const page = document.createElement("div");
  page.setAttribute("id", "detailPage");

  const detailPage = document.createElement("form");
  detailPage.setAttribute("id", "detailForm");
  page.appendChild(detailPage);

  const title = document.createElement("input");
  title.setAttribute("id", "title");
  title.setAttribute("placeholder", "내용을 입력하세요.");
  detailPage.appendChild(title);

  const detail = document.createElement("textarea");
  detail.setAttribute("placeholder", "상세 내용을 입력하세요.");
  detail.setAttribute("id", "detail");
  detailPage.appendChild(detail);

  const btnWrapper = document.createElement("div");
  btnWrapper.setAttribute("id", "divWrapper");
  detailPage.appendChild(btnWrapper);

  const btnAdd = document.createElement("button");
  const btnAddTodo = document.createTextNode("등록");
  btnAdd.setAttribute("id", "btnAdd");
  btnAdd.appendChild(btnAddTodo);
  btnWrapper.appendChild(btnAdd);

  const btnCancle = document.createElement("button");
  const btnCancleTodo = document.createTextNode("취소");
  btnCancle.setAttribute("id", "btnCancle");
  btnCancle.appendChild(btnCancleTodo);
  btnWrapper.appendChild(btnCancle);

  page.appendChild(Header("TODO App 등록"));
  page.appendChild(detailPage);
  page.appendChild(Footer());

  return page;
};

export default TodoRegist;
