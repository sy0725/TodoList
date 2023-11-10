import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

export const Header = () => {
  const location = useLocation();
  return (
    <StyledHeader>
      <h1>{location.pathname === '/regist' ? 'Make Your Plan' : 'What to do Today'}</h1>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  text-align: center;
  background-color: #d9d9d9;
  margin: 0 auto;
  width: 360px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  h1 {
    padding-top: 20px;
    margin: 0;
  }
`;
