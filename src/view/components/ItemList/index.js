import React from 'react';
import styled from 'styled-components';
import {ContentContainer} from "../../../styled/Common";
import Layout from "../Layout";
import Item from "./Item";
import {NewItemData} from "./NewItemData";

const ItemList = () => {

    const render = (item) => <Item {...item}/>

    return (
        <Container>
            <Layout data={NewItemData} render={render}/>
        </Container>
    )
}

const Container = styled.div`
  padding-top: 24px;
`;


export default ItemList;