// 할일 목록
import Header from "../../layout/Header.js";
import Footer from "../../layout/Footer.js";
import { linkTo } from '../../Router.js';

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
    response = await axios("http://localhost:33088/api/todolist");

    // ul
    const ul = document.createElement("ul");
    ul.setAttribute("class", "todolist");
    response.data?.items.reverse().forEach((item) => {
      // li
      const li = document.createElement("li");
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
      li.appendChild(checkbox);
      li.appendChild(title);
      ul.appendChild(li);
    });
    content.appendChild(ul);

    const btnMainWrapper = document.createElement("div");
    btnMainWrapper.setAttribute("id", "btnMainWrapper");
    content.appendChild(btnMainWrapper);

    const btnRegist = document.createElement('button');
    const btnTitle = document.createTextNode('등록');
    btnRegist.setAttribute("class", "enrollBtn");
    btnRegist.appendChild(btnTitle);
    btnMainWrapper.appendChild(btnRegist);

    const btnReset = document.createElement('button');
    const btnResetTitle = document.createTextNode('초기화');
    btnReset.setAttribute("id", "resetBtn");
    btnReset.appendChild(btnResetTitle);
    btnMainWrapper.appendChild(btnReset);

    btnRegist.addEventListener('click', () => {
      linkTo('regist');
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