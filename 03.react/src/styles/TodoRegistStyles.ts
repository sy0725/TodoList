import styled from 'styled-components';
// ROOT
export const Wrap = styled.form`
  width: 360px;
  height: 780px;
  background-color: #d9d9d9;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

// INPUT
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  margin: 15px auto 20px;
  max-width: calc(100% - 100px);
  gap: 15px;
`;

export const InputTitle = styled.input`
  outline: none;
  border: none;
  border-radius: 10px;
  height: 40px;
  font-family: 'Noto Sans KR', sans-serif;
  padding-left: 12px;
`;

export const InputContent = styled.textarea`
  outline: none;
  border: none;
  border-radius: 10px;
  height: 140px;
  resize: none;
  font-family: 'Noto Sans KR', sans-serif;
  padding: 12px 12px 0;
`;

// BUTTON
export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 210px;
  gap: 5px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 20px;
  background-color: #79e127;
  color: #fff;
  padding: 6px 14px;
  flex-shrink: 0;
  cursor: pointer;

  &.redButton {
    background-color: #ef5242;
  }
`;
