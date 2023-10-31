// 할일 목록
import Header from "../../layout/Header.js";
import Footer from "../../layout/Footer.js";
import TodoRegist from "../regist/TodoRegist.js";
// import TodoInfo from "../info/TodoInfo.js";
import { linkTo } from "../../Router.js";

const toggleDetailTodo = function (title, content) {
  const detailTodo = document.createElement("form");
  detailTodo.setAttribute("id", "detailTodo");

  const detailTitle = document.createElement("input");
  detailTitle.value = title;
  detailTitle.setAttribute("id", "detailTitle");

  const detailContent = document.createElement("textarea");
  detailContent.textContent = content;
  detailContent.setAttribute("id", "detailContent");

  const btnDetailWrapper = document.createElement("div");
  btnDetailWrapper.setAttribute("class", "divWrapper");

  const btnDetailEdit = document.createElement("button");
  btnDetailEdit.textContent = "수정";
  btnDetailEdit.setAttribute("id", "btnAdd");

  const btnDetailDelete = document.createElement("button");
  btnDetailDelete.textContent = "삭제";
  btnDetailDelete.setAttribute("id", "btnCancle");

  detailTodo.appendChild(detailTitle);
  detailTodo.appendChild(detailContent);
  detailTodo.appendChild(btnDetailWrapper);
  btnDetailWrapper.appendChild(btnDetailEdit);
  btnDetailWrapper.appendChild(btnDetailDelete);

  return detailTodo;
};

const TodoList = async function () {
  // 전체 div 박스
  const page = document.createElement("div");
  page.setAttribute("id", "page");

  // ul 묶는 div 박스
  const content = document.createElement("div");
  content.setAttribute("id", "content");
  let response;
  try {
    response = await axios("http://localhost:33088/api/todolist");

    // ul
    const ul = document.createElement("ul");
    ul.setAttribute("class", "todolist");
    response.data?.items.forEach(async (item) => {
      // li
      const li = document.createElement("li");
      const todoContent = document.createElement("div");
      const checkbox = document.createElement("input");
      const title = document.createElement("div");
      title.setAttribute("class", "title");

      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("class", "check");
      li.setAttribute("class", "list");
      const text = document.createTextNode(item.title);

      // const todoInfoLink = document.createElement("a");
      // todoInfoLink.setAttribute("href", `info?_id=${item._id}`);
      // const title = document.createTextNode(item.title);

      /*
      todoInfoLink.addEventListener("click", async function (event) {
        // 브라우저의 기본 동작 취소(<a> 태그 동작 안하도록)
        event.preventDefault();
        const infoPage = await TodoInfo({ _id: item._id });
        document.querySelector("#page").replaceWith(infoPage);
      });
      */

      title.appendChild(text);

      let showToggle = true;
      li.addEventListener("click", async function (event) {
        if (event.target.classList.contains("title")) {
          const detailResponse = await axios(
            `http://localhost:33088/api/todolist/${item._id}`
          );
          const { title, content } = detailResponse.data?.item;
          const openToggleDetail = toggleDetailTodo(title, content);
          if (showToggle) {
            event.preventDefault();

            todoContent.appendChild(openToggleDetail);
          } else {
            todoContent.removeChild(todoContent.lastChild);
          }
          showToggle = !showToggle;
        }
      });

      li.appendChild(checkbox);
      li.appendChild(todoContent);
      todoContent.appendChild(title);
      ul.appendChild(li);
    });
    content.appendChild(ul);

    // const btnTitle = document.createTextNode("등록");
    const btnRegist = document.createElement("button");
    const btnTitle = document.createTextNode("등록");
    btnRegist.setAttribute("class", "enrollBtn");
    btnRegist.appendChild(btnTitle);
    content.appendChild(btnRegist);

    btnRegist.addEventListener("click", () => {
      linkTo("regist");
    });
    btnRegist.setAttribute("class", "enrollBtn");
    btnRegist.appendChild(btnTitle);
    content.appendChild(btnRegist);

    btnRegist.addEventListener("click", () => {
      const registPage = TodoRegist();
      document.querySelector("#page").replaceWith(registPage);
    });
  } catch (err) {
    const error = document.createTextNode("일시적인 오류 발생");
    content.appendChild(error);
  }

  page.appendChild(Header("What to do today?😙"));
  page.appendChild(content);
  page.appendChild(Footer());
  return page;
};

export default TodoList;
