import React from 'react';
import styled from 'styled-components';

const UploadItem = (props) => {

    const {
        name,
        price,
        detail
    } = props

    if (!name) return null;

    return (
        <Container>
            <Image/>
            <Content>
                <ItemTitle>
                    <Tag>[{name}]</Tag>
                    <h1>{name}</h1>
                </ItemTitle>
                <Price>{price}원</Price>
                <Detail>{detail}</Detail>
            </Content>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Image = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 8px;
  background: ${props => props.theme.GrayScale08};
  margin-right: 10px;
`;

const Content = styled.div`
  line-height: 1.4;
`;

const ItemTitle = styled.div`
  display: flex;

  h1 {
    font-weight: 600;
  }
`;

const Tag = styled.p`
  color: ${props => props.theme.MainColor};
  padding-right: 5px;
`;

const Price = styled.p`
  font-weight: 600;
`;

const Detail = styled.p`
  display: inline-block;
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props => props.theme.GrayScale05};
  font-size: ${props => props.theme.H4};;
`;


export default UploadItem;