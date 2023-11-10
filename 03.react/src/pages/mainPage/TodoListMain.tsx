import TodoUpdate from '../../component/updatePage/TodoUpdate';
import { getTodoList, deleteTodoItem, patchTodoItem } from '../../API/axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const TodoListMain = () => {
  const [data, setData] = useState<TodoItem[]>();

  const [toggle, setToggle] = useState<{ [key: number]: boolean }>({});
  const navigate = useNavigate();

  const moveToRegist = () => {
    navigate('/regist');
  };

  const deleteAllTodo = async () => {
    data?.forEach((item) => deleteTodoItem(item._id));
  };

  const getData = async () => {
    const response = await getTodoList();
    setData(response.data.items.reverse());
  };

  useEffect(() => {
    getData();
  }, []);

  const showTodoDetail = async (id: number) => {
    setToggle((prev) => {
      const newToggle = { ...prev };
      newToggle[id] = !newToggle[id];
      return newToggle;
    });
  };

  const checkTodoDone = async (item: TodoItem) => {
    const { _id, done } = item;
    const body = {
      ...item,
      done: !done,
    };
    await patchTodoItem(_id, body);
    getData();
  };

  return (
    <>
      {data?.map((item) => (
        <li key={item._id}>
          <input type='checkbox' onChange={() => checkTodoDone(item)} checked={item.done} />
          <div onClick={() => showTodoDetail(item._id)}>{item.title}</div>
          <TodoUpdate idNum={item._id} toggle={toggle[item._id]} getData={getData} />
        </li>
      ))}
      <div>
        <button onClick={moveToRegist}>등록</button>
        <button onClick={deleteAllTodo}>전체삭제</button>
      </div>
    </>
  );
};
