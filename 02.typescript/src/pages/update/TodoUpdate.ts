import { linkTo } from "../../Router";
import axios from 'axios'


// 할일 수정


const toggleDetailTodo  = function (title : string, content : string, itemId : number) {

  const detailTodo = document.createElement("form");
  detailTodo.setAttribute("id", "detailTodo");

  const detailTitle = document.createElement("input");
  detailTitle.value = title;
  detailTitle.setAttribute("id", "detailTitle");

  let titleEdit = title;
  detailTitle.addEventListener("change", function (e) {
    if(e.target instanceof HTMLInputElement){
      titleEdit = e.target.value;
    }
  });

  const detailContent = document.createElement("textarea");
  detailContent.textContent = content;
  detailContent.setAttribute("id", "detailContent");

  let contentEdit = content;
  detailContent.addEventListener("change", function (e) {
    if(e.target instanceof HTMLTextAreaElement)
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
    const detailEdit = await axios.patch<TodoResponse>(
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
    const detailDelete = await axios.delete<Partial<TodoResponse>>(
      `http://localhost:33088/api/todolist/${itemId}`
    );
    linkTo("/");
  });

  detailTodo.appendChild(detailTitle);
  detailTodo.appendChild(detailContent);
  detailTodo.appendChild(btnDetailWrapper);
  btnDetailWrapper.appendChild(btnDetailEdit);
  btnDetailWrapper.appendChild(btnDetailDelete);

  return detailTodo

};
export default toggleDetailTodo;