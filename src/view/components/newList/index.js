import React from 'react';
import styled from 'styled-components';
import {ListContainer} from "../../../styled/Common";
import Layout from "../layout";
import ListItem from "./ListItem";
import {NewItemData} from "./NewItemData";

const NewList = () => {

    const render = (item) => <ListItem {...item}/>

    return (
        <Container>
            <ListWrap>
            <Title>
                신상품 목록
            </Title>
                <ShowAll>전체보기</ShowAll>
            </ListWrap>
            <Layout data={NewItemData} render={render}/>
        </Container>
    )
}

const Container = styled(ListContainer)`
  padding-top: 24px;
`;

const ListWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-weight: 500;
`;

const ShowAll = styled.a`
    font-size: 14px;
  cursor: pointer;
`;

export default NewList;