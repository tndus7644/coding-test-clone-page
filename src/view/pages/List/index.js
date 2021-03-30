import React from 'react';
import styled from 'styled-components';
import {PageContainer} from "../../../styled/Common";
import VisualBanner from "../../components/Banner/visualBanner";
import EventBanner from "../../components/Banner/eventBanner";
import {IconSvg} from "../../../svg";
import NewList from "../../components/NewList";

const List = () => {

    return (
        <Container ClassName={"List"}>
            <Header>
                <Icon>
                    <IconSvg/>
                </Icon>
            </Header>
            <VisualBanner/>
            <EventBanner/>
            <NewList/>
        </Container>
    )
}

const Container = styled(PageContainer)`
    
`;

const Icon = styled.div`
  cursor: pointer;
`;

const Header = styled.header`
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;



export default List;