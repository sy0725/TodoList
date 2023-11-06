// 할일 목록
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { linkTo } from "../../Router";
import axios, { AxiosResponse } from 'axios'
import  toggleDetailTodo  from "./../update/TodoUpdate";





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
  btnMainWrapper.setAttribute("id", "btnMainWrapper");
  ul.setAttribute("id", "todolist");
  btnRegist.setAttribute("id", "btnEnroll");
  btnReset.setAttribute("id", "btnReset");
  
  content.appendChild(ul);
  content.appendChild(btnMainWrapper);
  btnRegist.appendChild(btnTitle);
  btnMainWrapper.appendChild(btnRegist);
  btnReset.appendChild(btnResetTitle);
  btnMainWrapper.appendChild(btnReset);
  
  let response: AxiosResponse<TodoListResponse> ;
  try {
    const instance = axios.create({
      baseURL: "http://localhost:33088/api",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await axios<TodoListResponse>(
      "http://localhost:33088/api/todolist"
      );

    if (!response.data.items.length) {
      const item = document.createElement("span");
      const itemContent = document.createTextNode("할일을 추가해주세요.");
      item.appendChild(itemContent);
      content.appendChild(item);
    }

    response.data?.items.reverse().forEach(async (item) => {
      // li
      const li = document.createElement("li");
      const todoContent = document.createElement("div");
      const checkbox = document.createElement("input");
      const title = document.createElement("div");

      if (item.done) {
        title.setAttribute("class", "title isDone");
        checkbox.checked = true;
      } else {
        title.setAttribute("class", "title");
        checkbox.checked = false;
      }

      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("class", "check");
      li.setAttribute("class", "list");
      const text = document.createTextNode(item.title);

      checkbox.addEventListener("click", async function () {
        await instance
          .patch(`/todolist/${item._id}`, {
            done: checkbox.checked ? true : false,
          })
          .then(function () {
            checkbox.checked
              ? title.setAttribute("class", "title isDone")
              : title.setAttribute("class", "title");
          })
          .catch(function (error) {
            if(error instanceof Error){
              console.log(error);
            }
          });
      });

      title.appendChild(text);

      let showToggle = true;
      li.addEventListener("click", async function (event : Event) {
        if (event.target instanceof Element){
          if (event.target!.classList.contains("title")) {
            const detailResponse = await axios<TodoResponse>(
              `http://localhost:33088/api/todolist/${item._id}`
            );
            const { title, content } = detailResponse.data?.item;
            
            const openToggleDetail = toggleDetailTodo(title, content, item._id);
            if (showToggle) {
              event.preventDefault();
  
              todoContent.appendChild(openToggleDetail);
            } else {
              if(todoContent.lastChild){
                todoContent.removeChild(todoContent.lastChild);
              }
            }
            showToggle = !showToggle;
          }
        }
      });

      li.appendChild(checkbox);
      li.appendChild(todoContent);
      todoContent.appendChild(title);
      ul.appendChild(li);
    });

    btnRegist.addEventListener("click", () => {
      linkTo("regist");
    });

    btnReset.addEventListener("click", async function (e : Event) {
      e.preventDefault();
      response.data?.items.forEach((item) => instance
        .delete(`/todolist/${item._id}`)
        .then(function (response) {
          console.log(response);
          linkTo("/");
        })
        .catch(function (error) {
          if (error instanceof Error) {
            console.log(error);
          }
        })
      );
    });
  } catch (error : any) {
    if(error instanceof Error){
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
