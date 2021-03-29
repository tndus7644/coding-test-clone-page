import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const PageButton = styled(Link)`
  background: #226bef;
  color: #fff;
  cursor: pointer;
  user-select: none;
  border: 0;
  width: 100px;
  height: 40px;
  border-radius: 100px;
  margin: 15px 0;
  box-shadow: 0 1px 7px 3px rgba(0,0,0,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  
  &:focus{
    outline: 0;
  }
`;
