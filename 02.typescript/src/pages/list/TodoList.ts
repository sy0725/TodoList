// 할일 목록
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { linkTo } from "../../Router";
import toggleDetailTodo from "./../update/TodoUpdate";
import {
  getTodoItem,
  deleteTodoItem,
  patchTodoItem,
  getTodoList,
} from "../../API/axios";

const TodoList = async function () {
  const page = document.createElement("div");
  const content = document.createElement("div");
  const btnMainWrapper = document.createElement("div");
  const btnRegist = document.createElement("button");
  const btnTitle = document.createTextNode("등록");
  const btnReset = document.createElement("button");
  const btnResetTitle = document.createTextNode("전체삭제");
  const ul = document.createElement("ul");

  page.setAttribute("id", "page");
  content.setAttribute("id", "content");
  ul.setAttribute("id", "todolist");
  btnMainWrapper.setAttribute("id", "btnMainWrapper");
  btnRegist.setAttribute("id", "btnEnroll");
  btnReset.setAttribute("id", "btnReset");

  btnRegist.appendChild(btnTitle);
  btnReset.appendChild(btnResetTitle);
  btnMainWrapper.appendChild(btnRegist);
  btnMainWrapper.appendChild(btnReset);

  try {
    const response = await getTodoList();

    if (!response.data.items.length) {
      const item = document.createElement("span");
      const itemContent = document.createTextNode("할일을 추가해주세요.");
      item.appendChild(itemContent);
      content.appendChild(item);
    }
    content.appendChild(ul);
    content.appendChild(btnMainWrapper);

    response.data?.items.reverse().forEach(async (item) => {
      // li
      const checkbox = document.createElement("input");
      const li = document.createElement("li");
      const todoContent = document.createElement("div");
      const title = document.createElement("div");
      const text = document.createTextNode(item.title);
      let showToggle = true;

      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("class", "check");
      li.setAttribute("class", "list");

      if (item.done) {
        title.setAttribute("class", "title isDone");
        checkbox.checked = true;
      } else {
        title.setAttribute("class", "title");
        checkbox.checked = false;
      }

      checkbox.addEventListener("click", async function () {
        const body = {
          done: checkbox.checked ? true : false,
        };
        await patchTodoItem(item._id, body)
          .then(function () {
            checkbox.checked
              ? title.setAttribute("class", "title isDone")
              : title.setAttribute("class", "title");
          })
          .catch(function (error) {
            if (error instanceof Error) {
              console.log(error);
            }
          });
      });

      li.addEventListener("click", async function (event: Event) {
        if (event.target instanceof Element) {
          if (event.target!.classList.contains("title")) {
            const detailResponse = await getTodoItem(item._id);
            const { title, content } = detailResponse.data?.item;

            const openToggleDetail = toggleDetailTodo(title, content, item._id);
            if (showToggle) {
              event.preventDefault();

              todoContent.appendChild(openToggleDetail);
            } else {
              if (todoContent.lastChild) {
                todoContent.removeChild(todoContent.lastChild);
              }
            }
            showToggle = !showToggle;
          }
        }
      });

      title.appendChild(text);
      li.appendChild(checkbox);
      li.appendChild(todoContent);
      todoContent.appendChild(title);
      ul.appendChild(li);
    });

    btnRegist.addEventListener("click", () => {
      linkTo("regist");
    });

    btnReset.addEventListener("click", async function (e: Event) {
      e.preventDefault();
      response.data?.items.forEach((item) =>
        deleteTodoItem(item._id)
          .then(function () {
            linkTo("/");
          })
          .catch(function (error) {
            if (error instanceof Error) {
              console.log(error);
            }
          })
      );
    });
  } catch (error) {
    if (error instanceof Error) {
      const error = document.createTextNode("일시적인 오류 발생");
      content.appendChild(error);
    }
  }

  page.appendChild(Header("What to do today?😙"));
  page.appendChild(content);
  page.appendChild(Footer());
  return page;
};

export default TodoList;
