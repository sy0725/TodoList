import styled from 'styled-components';

export const TodoList = styled.ul`
  width: 300px;
  list-style: none;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 35px;
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

export const CheckBox = styled.input`
  margin: 3px 10px 3px 4px;
`;

export const TodoTitle = styled.h2`
  display: inline-block;
  background-color: #d9d9d9;
  width: 260px;
  height: 40px;
  font-size: 16px;
  border-radius: 75px;
  color: black;
  text-align: left;
  justify-content: start;
  margin: 0;
  padding-left: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`;

export const TodoGuide = styled.span`
  text-align: center;
`;

// BUTTON
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 20px;
  background-color: #d9d9d9;
  color: black;
  padding: 6px 12px;
  flex-shrink: 0;
  cursor: pointer;

  &.redButton {
    margin-left: 10px;
  }

  &:hover {
    background: #79e127;
    color: white;
  }

  &.redButton:hover {
    background-color: #ef5242;
    color: white;
  }
`;
