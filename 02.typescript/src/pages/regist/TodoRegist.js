// 할일 등록
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import { linkTo } from "../../Router";

const TodoRegist = function () {
  const page = document.createElement("div");
  page.setAttribute("id", "detailPage");

  const detailPage = document.createElement("form");
  detailPage.setAttribute("id", "detailForm");
  page.appendChild(detailPage);

  const title = document.createElement("input");
  title.setAttribute("id", "title");
  title.setAttribute("type", "text")
  title.setAttribute("placeholder", "할일을 입력하세요.");
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

  page.appendChild(Header("Make Your Plan"));
  page.appendChild(detailPage);
  page.appendChild(Footer());

  const instance = axios.create({
    baseURL: 'http://localhost:33088/api',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  btnAdd.addEventListener('click', async function (e) {
    e.preventDefault();
    if (!title.value) {
      alert("할일을 입력해주세요!")
    }

    await instance
      .post('/todolist', {
        title: title.value,
        content: detail.value || '상세 내용이 없습니다.'
      })
      .then(function (response) {
        console.log(response);
        // location.href = 'http://localhost:3000';
        linkTo("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  btnCancle.addEventListener('click', (e) => {
    e.preventDefault();
    // location.href = 'http://localhost:3000';
    linkTo("/");
  });

  return page;
};

export default TodoRegist;