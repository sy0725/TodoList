import { postTodoItem } from '../../API/axios';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { REGIST_PAGE_CONSTANT_TEXT, initialState } from './TodoRegistSettings';
import * as R from '../../styles/TodoRegistStyles';

export const TodoRegist = () => {
  const [input, setInput] = useState<TodoInput>(initialState);
  const navigate = useNavigate();

  const moveToBack = () => {
    navigate(-1);
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.content === '') {
      input.content = REGIST_PAGE_CONSTANT_TEXT.INPUT_WRAN;
    }

    const res = await postTodoItem(input);

    if (res.status === 200) {
      moveToBack();
    }
  };

  const onCancel = () => {
    let useAnswer = window.confirm(REGIST_PAGE_CONSTANT_TEXT.WRITE_CANCEL);
    if (useAnswer) {
      setInput(initialState);
    }
  };
  return (
    <R.Wrap onSubmit={onSubmit}>
      <R.InputContainer>
        <R.InputTitle
          name='title'
          placeholder={REGIST_PAGE_CONSTANT_TEXT.INPUT_TITLE}
          type='text'
          onChange={onChangeInput}
          value={input.title}
        />
        <R.InputContent
          name='content'
          placeholder={REGIST_PAGE_CONSTANT_TEXT.INPUT_CONTENT}
          onChange={onChangeInput}
          value={input.content}
        />
      </R.InputContainer>
      <R.ButtonContainer>
        <R.Button>등록</R.Button>
        <R.Button type='button' className='redButton' onClick={onCancel}>
          {REGIST_PAGE_CONSTANT_TEXT.BUTTON_CANCEL}
        </R.Button>
      </R.ButtonContainer>
    </R.Wrap>
  );
};
