import React from 'react';
import styled from 'styled-components';
import {Overlay} from "../../../styled/Common";
import Event from '../../../img/Main/Event.png'

const EventBanner = () => {

    return (
        <Container>
            <Title>티릴리 쇼핑몰 런칭 이벤트</Title>
            <Overlay alpha={0.4}/>
            <img src={Event} alt=""/>
        </Container>
    )
}

const Container = styled.div`
  position: relative;
`;

const Title = styled.h3`
  position: absolute;
  top: 37px;
  right: 28px;
  z-index: 100;
  color: ${props => props.theme.GrayScale09};
  font-weight: 500;
  font-size: 18px;
`;


export default EventBanner;