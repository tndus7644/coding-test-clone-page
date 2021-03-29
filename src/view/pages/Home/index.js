import React from 'react';
import styled from 'styled-components';
import {PageContainer} from "../../../styled/Common";
import VisualBanner from "../../components/banner/visualBanner";
import EventBanner from "../../components/banner/eventBanner";
import {IconSvg} from "../../../svg";
import NewList from "../../components/newList";

const Home = () => {

    return (
        <PageContainer ClassName={"Home"}>
            <Header>
                <Icon>
                    <IconSvg/>
                </Icon>
            </Header>
            <VisualBanner/>
            <EventBanner/>
            <NewList/>
        </PageContainer>
    )
}

const Icon = styled.div`
  cursor: pointer;
  svg {
    fill: #226bef;
  }
`;

const Header = styled.header`
  height: 56px;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;



export default Home;