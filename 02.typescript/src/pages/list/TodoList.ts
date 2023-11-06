// 할일 목록
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { linkTo } from "../../Router";
import axios from 'axios'

const toggleDetailTodo = function (title, content, itemId) {
  const detailTodo = document.createElement("form");
  detailTodo.setAttribute("id", "detailTodo");

  const detailTitle = document.createElement("input");
  detailTitle.value = title;
  detailTitle.setAttribute("id", "detailTitle");

  let titleEdit = title;
  detailTitle.addEventListener("change", function (e) {
    titleEdit = e.target.value;
  });

  const detailContent = document.createElement("textarea");
  detailContent.textContent = content;
  detailContent.setAttribute("id", "detailContent");

  let contentEdit = content;
  detailContent.addEventListener("change", function (e) {
    contentEdit = e.target.value;
  });

  const btnDetailWrapper = document.createElement("div");
  btnDetailWrapper.setAttribute("id", "btnDetailWrapper");

  const btnDetailEdit = document.createElement("button");
  btnDetailEdit.textContent = "수정";
  btnDetailEdit.setAttribute("id", "btnAdd");

  btnDetailEdit.addEventListener("click", async function (e) {
    e.preventDefault();
    const body = { title: titleEdit, content: contentEdit };
    const detailEdit = await axios.patch(
      `http://localhost:33088/api/todolist/${itemId}`,
      body
    );
    linkTo("/");
  });

  const btnDetailDelete = document.createElement("button");
  btnDetailDelete.textContent = "삭제";
  btnDetailDelete.setAttribute("id", "btnCancle");

  btnDetailDelete.addEventListener("click", async function (e) {
    e.preventDefault();
    const detailDelete = await axios.delete(
      `http://localhost:33088/api/todolist/${itemId}`
    );
    linkTo("/");
  });

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
    const instance = axios.create({
      baseURL: 'http://localhost:33088/api',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    response = await axios<TodoListResponse>("http://localhost:33088/api/todolist");

    // ul
    const ul = document.createElement("ul");
    ul.setAttribute("id", "todolist");

    if (!response.data.items.length) {
      const item = document.createElement('span');
      const itemContent = document.createTextNode('할일을 추가해주세요.')
      item.appendChild(itemContent);
      content.appendChild(item);
    };

    response.data?.items.reverse().forEach(async (item) => {
      // li
      const li = document.createElement("li");
      const todoContent = document.createElement("div");
      const checkbox = document.createElement("input");
      const title = document.createElement("div");

      if (item.done) {
        title.setAttribute("class", "title isDone")
        checkbox.checked = true;
      } else {
        title.setAttribute("class", "title")
        checkbox.checked = false;
      }

      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("class", "check");
      li.setAttribute("class", "list");
      const text = document.createTextNode(item.title);

      checkbox.addEventListener('click', async function () {
        await instance
          .patch(`/todolist/${item._id}`, {
            done: checkbox.checked ? true : false,
          })
          .then(function (response) {
            console.log(response);
            checkbox.checked ? title.setAttribute("class", "title isDone") : title.setAttribute("class", "title");
          })
          .catch(function (error) {
            console.log(error);
          });
      })

      title.appendChild(text);

      let showToggle = true;
      li.addEventListener("click", async function (event) {
        if (event.target.classList.contains("title")) {
          const detailResponse = await axios(
            `http://localhost:33088/api/todolist/${item._id}`
          );
          const { title, content } = detailResponse.data?.item;
          const openToggleDetail = toggleDetailTodo(title, content, item._id);
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

    const btnMainWrapper = document.createElement("div");
    btnMainWrapper.setAttribute("id", "btnMainWrapper");
    content.appendChild(btnMainWrapper);

    const btnRegist = document.createElement('button');
    const btnTitle = document.createTextNode('등록');
    btnRegist.setAttribute("id", "btnEnroll");
    btnRegist.appendChild(btnTitle);
    btnMainWrapper.appendChild(btnRegist);

    const btnReset = document.createElement('button');
    const btnResetTitle = document.createTextNode('전체삭제');
    btnReset.setAttribute("id", "btnReset");
    btnReset.appendChild(btnResetTitle);
    btnMainWrapper.appendChild(btnReset);

    btnRegist.addEventListener('click', () => {
      linkTo('regist');
    });

    btnReset.addEventListener('click', async function (e) {
      e.preventDefault();
      await response.data?.items.forEach(item => instance
        .delete(`/todolist/${item._id}`)
        .then(function (response) {
          console.log(response);
          linkTo('/');
        })
        .catch(function (error) {
          console.log(error);
        }));
    })
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
