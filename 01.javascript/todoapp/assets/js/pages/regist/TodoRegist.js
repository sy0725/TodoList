// 할일 등록
import Header from '../../layout/Header.js';
import Footer from '../../layout/Footer.js';

const TodoRegist = function () {
  const page = document.createElement('div');
  page.setAttribute('id', 'detailPage');

  const detailPage = document.createElement('form');
  page.setAttribute('id', 'detailForm');
  page.appendChild(detailPage);

  const title = document.createElement('input');
  const titleContent = document.createTextNode('할 일');
  detailPage.appendChild(title);
  title.appendChild(titleContent);

  const detail = document.createElement('textarea');
  const detailContent = document.createTextNode('상세 내용을 입력하세요.');
  detailPage.appendChild(detail);
  detail.appendChild(detailContent);

  const btnAdd = document.createElement('button');
  const btnAddTodo = document.createTextNode('등록');
  btnAdd.setAttribute('type', 'submit');
  btnAdd.appendChild(btnAddTodo);
  detailPage.appendChild(btnAdd);

  const btnCancle = document.createElement('button');
  const btnCancleTodo = document.createTextNode('취소');
  btnCancle.appendChild(btnCancleTodo);
  detailPage.appendChild(btnCancle);

  page.appendChild(Header('TODO App 등록'));
  page.appendChild(detailPage);
  page.appendChild(Footer());

  return page;
};

export default TodoRegist;