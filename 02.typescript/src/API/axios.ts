import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:33088/api",
  headers: {
    "Content-Type": "application/json",
  },
});

const getTodoList = async () => {
  const response = await instance.get<TodoListResponse>("/todolist");
  return response;
};

const deleteTodoItem = async (id: number) => {
  const response = (await instance.delete)<Partial<TodoResponse>>(
    `todolist/${id}`
  );
  return response;
};

const getTodoItem = async (id: number) => {
  const response = (await instance.get)<TodoResponse>(`todolist/${id}`);
  return response;
};

const patchTodoItem = async (itemId: number) => {
  const response = (await instance.patch)<TodoResponse>(`todolist/${itemId}`);
  return response;
};

interface Data {
  title: string;
  content: string;
}

export const postTodoItem = async (body: Data) => {

  const response = await instance.post<TodoResponse>(`todolist`, body);
  return response;
};
