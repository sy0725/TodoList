import { linkTo } from "../../Router";
import axios from "axios";
import { patchTodoItem, deleteTodoItem } from "../../API/axios";

// 할일 수정

const toggleDetailTodo = function (
  title: string,
  content: string,
  itemId: number
) {
  const detailTodo = document.createElement("form");
  const detailTitle = document.createElement("input");
  const detailContent = document.createElement("textarea");
  const btnDetailWrapper = document.createElement("div");
  const btnDetailEdit = document.createElement("button");
  const btnDetailDelete = document.createElement("button");
  let titleEdit = title;
  let contentEdit = content;

  detailTodo.setAttribute("id", "detailTodo");
  detailTitle.setAttribute("id", "detailTitle");
  detailContent.setAttribute("id", "detailContent");
  btnDetailWrapper.setAttribute("id", "btnDetailWrapper");
  btnDetailEdit.setAttribute("id", "btnAdd");
  btnDetailDelete.setAttribute("id", "btnCancle");

  detailTitle.value = title;
  detailContent.textContent = content;
  btnDetailEdit.textContent = "수정";
  btnDetailDelete.textContent = "삭제";

  detailTitle.addEventListener("change", function (e) {
    if (e.target instanceof HTMLInputElement) {
      titleEdit = e.target.value;
    }
  });

  detailContent.addEventListener("change", function (e) {
    if (e.target instanceof HTMLTextAreaElement) contentEdit = e.target.value;
  });

  btnDetailEdit.addEventListener("click", async function (e) {
    e.preventDefault();
    const body = { title: titleEdit, content: contentEdit };
    const detailEdit = await patchTodoItem(itemId, body);
    linkTo("/");
  });

  btnDetailDelete.addEventListener("click", async function (e) {
    e.preventDefault();
    const detailDelete = await deleteTodoItem(itemId);
    linkTo("/");
  });

  detailTodo.appendChild(detailTitle);
  detailTodo.appendChild(detailContent);
  detailTodo.appendChild(btnDetailWrapper);
  btnDetailWrapper.appendChild(btnDetailEdit);
  btnDetailWrapper.appendChild(btnDetailDelete);

  return detailTodo;
};
export default toggleDetailTodo;
