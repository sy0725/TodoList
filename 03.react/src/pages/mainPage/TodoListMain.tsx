import TodoUpdate from '../../component/updatePage/TodoUpdate';
import { getTodoList, deleteTodoItem, patchTodoItem } from '../../API/axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '../../styles/TodoListStyles';

// fillter = 유저는 TodoList done 값으로 필터링을 할 수 있다.
// sorting = todo를 업데이트한 날짜를 기반으로 오름차순과 내림차순으로 설정 가능하다
// search = 특정 단어를 검색 제목이나 컨텐츠에 속해있는지 여부에 따라 검색가능

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
      <S.TodoList>
        {data?.map((item) => (
          <li key={item._id}>
            <div>
              <S.CheckBox
                type='checkbox'
                onChange={() => checkTodoDone(item)}
                checked={item.done}
              />
              <S.TodoTitle onClick={() => showTodoDetail(item._id)}>{item.title}</S.TodoTitle>
            </div>

            <TodoUpdate idNum={item._id} toggle={toggle[item._id]} getData={getData} />
          </li>
        ))}
        {!data?.length && <S.TodoGuide>할일을 추가해주세요.</S.TodoGuide>}
      </S.TodoList>
      <S.ButtonContainer>
        <S.Button onClick={moveToRegist}>등록</S.Button>
        <S.Button className='redButton' onClick={deleteAllTodo}>
          전체삭제
        </S.Button>
      </S.ButtonContainer>
    </>
  );
};
