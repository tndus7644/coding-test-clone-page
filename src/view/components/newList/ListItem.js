import React from 'react';
import styled from 'styled-components';

const ListItem = ({title, price, image}) => {

    return (
        <Container>
            <img src={image} alt=""/>
            <Title><span>[에코백] </span>{title}</Title>
            <Price>{price} <span>원</span></Price>
        </Container>
    )
}

const Container = styled.div`
`;

const Title = styled.p`
  font-size: 14px;
  padding-top: 8px;

  span {
    color: #226bef;
    font-size: 14px;
  }
`;

const Price = styled.p`
  padding-top: 9px;
  font-weight: 600;

  span {
    font-weight: normal;
    font-size: 12px;
  }
`;

export default ListItem;