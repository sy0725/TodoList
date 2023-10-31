// 할일 목록
import Header from "../../layout/Header.js";
import Footer from "../../layout/Footer.js";
import TodoRegist from "../regist/TodoRegist.js";
import TodoInfo from "../info/TodoInfo.js";

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
    response.data?.items.forEach((item) => {
      // li
      const li = document.createElement("li");
      const checkbox = document.createElement("input");
      const title = document.createElement("div");
      title.setAttribute("class", "title");

      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("class", "check");
      li.setAttribute("class", "list");
      const text = document.createTextNode(item.title);

      const todoInfoLink = document.createElement("a");
      // todoInfoLink.setAttribute("href", `info?_id=${item._id}`);
      // const title = document.createTextNode(item.title);

      // todoInfoLink.addEventListener("click", async function (event) {
      //   // 브라우저의 기본 동작 취소(<a> 태그 동작 안하도록)
      //   event.preventDefault();
      //   const infoPage = await TodoInfo({ _id: item._id });
      //   document.querySelector("#page").replaceWith(infoPage);
      // });

      title.appendChild(text);

      // todoInfoLink.appendChild(title);
      li.appendChild(checkbox);
      li.appendChild(title);
      // li.appendChild(todoInfoLink);
      ul.appendChild(li);
    });
    content.appendChild(ul);

    const btnTitle = document.createTextNode("등록");
    const btnRegist = document.createElement("button");
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
