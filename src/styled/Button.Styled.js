import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const GlobalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  
`;

export const PageButton = styled(Link)`
  background: ${props => props.theme.MainColor};
  color: ${props => props.theme.GrayScale09};
  cursor: pointer;
  user-select: none;
  border: 0;
  width: 100px;
  height: 40px;
  border-radius: 100px;
  margin: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  
  &:focus{
    outline: 0;
  }
`;

export const CheckButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.GrayScale06};
  color: ${props => props.theme.GrayScale06};
  font-size: 16px;
  border-radius: 8px;
  width: 100%;
  height: 56px;

  &:focus{
    outline: 0;
  }
`;
