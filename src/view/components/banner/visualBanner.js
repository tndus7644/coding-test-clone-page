import React from 'react';
import styled from 'styled-components';
import {Overlay} from "../../../styled/Common";
import HomeVisual from "../../../img/Main/HomeVisual.png";

const VisualBanner = () => {

    return(
        <Container>
                <Title>
                    봄맞이 세일 실시
                </Title>
                <Overlay alpha={0.4}/>
                <img src={HomeVisual} alt=""/>
        </Container>
    )
}

const Container = styled.div`
  position: relative;
`;

const Title = styled.h3`
  position: absolute;
  z-index: 50;
  bottom: 0;
  left: 0;
  color: #fff;
  line-height: 27px;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.54px;
  padding: 0 0 42px 20px;
`;


export default VisualBanner;