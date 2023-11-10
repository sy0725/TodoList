import { getTodoItem, patchTodoItem, deleteTodoItem } from "../../API/axios";
import { useState, useEffect } from "react";

const initailState = {
  title: "",
  content: "",
};

interface TodoUpdateProps {
  idNum: number;
  toggle: boolean;
  getData: Function;
}

export default function TodoUpdate({
  idNum,
  toggle,
  getData,
}: TodoUpdateProps) {
  const [immediate, setImmediate] = useState(initailState);

  const getDetailData = async () => {
    const detailResponse = await getTodoItem(idNum);
    const { title, content } = detailResponse.data.item;
    setImmediate({ title, content });
  };

  useEffect(() => {
    getDetailData();
  }, []);

  const updateTodo = async () => {
    const body = { title: immediate.title, content: immediate.content };
    await patchTodoItem(idNum, body);
    getData();
  };

  const deleteTodo = async () => {
    await deleteTodoItem(idNum);
    getData();
  };

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setImmediate((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      {toggle && (
        <form>
          <input
            type="text"
            value={immediate.title}
            name="title"
            onChange={onChangeHandler}
          />
          <textarea
            value={immediate.content}
            name="content"
            onChange={onChangeHandler}
          />
          <div>
            <button type="button" onClick={updateTodo}>
              수정
            </button>
            <button type="button" onClick={deleteTodo}>
              삭제
            </button>
          </div>
        </form>
      )}
    </>
  );
}
