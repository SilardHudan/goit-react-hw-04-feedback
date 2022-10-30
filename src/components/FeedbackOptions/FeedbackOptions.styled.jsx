import styled from 'styled-components';

export const BtnList = styled.ul`
  display: flex;
  justify-content: center;
  margin: -10px;
`;

export const BtnItem = styled.li`
  margin: 10px;
`;

export const Button = styled.button`
  min-width: 100px;
  padding: 10px 20px;
  border: none;
  border-radius: 15px;

  border: 2px solid #fff;
  font-size: 20px;
  color: #fff;
  background-color: orange;
  text-align: center;
  transition: all 200ms linear;
  cursor: pointer;

  :hover {
    border: 2px solid orange;
    color: orange;
    background-color: #fff;
  }
`;