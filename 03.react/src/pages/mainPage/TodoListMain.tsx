import TodoUpdate from '../../component/updatePage/TodoUpdate';
import { getTodoList, deleteTodoItem, patchTodoItem } from '../../API/axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const TodoListMain = () => {
  const [data, setData] = useState<TodoItem[]>();

  const [toggle, setToggle] = useState<{ [key: number]: boolean }>({});
  const navigate = useNavigate();

  const moveToRegist = () => {
    navigate('/regist');
  };

  const deleteAllTodo = async () => {
    data?.forEach((item) => deleteTodoItem(item._id));
    getData();
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
      <TodoList>
        {data?.map((item) => (
          <li key={item._id}>
            <div>
              <input type='checkbox' onChange={() => checkTodoDone(item)} checked={item.done} />
              <TodoTitle onClick={() => showTodoDetail(item._id)}>{item.title}</TodoTitle>
            </div>

            <TodoUpdate idNum={item._id} toggle={toggle[item._id]} getData={getData} />
          </li>
        ))}
      </TodoList>
      <ButtonContainer>
        <Button onClick={moveToRegist}>등록</Button>
        <Button className='redButton' onClick={deleteAllTodo}>
          전체삭제
        </Button>
      </ButtonContainer>
    </>
  );
};

const TodoList = styled.ul`
  width: 300px;
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto 20px;

  li div {
    display: flex;
  }

  & > input {
    display: inline-block;
    margin-right: 10px;
    width: 20px;
  }
`;

const TodoTitle = styled.h2`
  display: inline-block;
  background-color: #d9d9d9;
  width: 260px;
  height: 40px;
  font-size: 16px;
  border-radius: 75px;
  color: black;
  text-align: left;
  justify-content: start;
  padding-left: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

// BUTTON
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`;

const Button = styled.button`
  border: none;
  border-radius: 20px;
  background-color: #79e127;
  color: #fff;
  padding: 6px 12px;
  flex-shrink: 0;
  cursor: pointer;

  &.redButton {
    margin-left: 20px;
    background-color: #ef5242;
  }
`;
