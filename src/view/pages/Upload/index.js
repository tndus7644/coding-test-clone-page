import React from 'react';
import styled from 'styled-components';
import {ContentContainer, PageContainer} from "../../../styled/Common";
import {navigate} from "../../../lib/History";
import {Back} from "../../../svg";
import {GlobalButton} from "../../../styled/Button.Styled";

const Upload = () => {

    return (
        <Container ClassName={"Upload"}>
            <ContentContainer>
                <Header>
                    <Icon onClick={() => navigate("/")}>
                        <Back/>
                    </Icon>
                    <Title>등록하기</Title>
                    <Button>완료</Button>
                </Header>
            </ContentContainer>
            <Photo><h4>사진을 등록하세요.</h4></Photo>
            <ContentContainer>

            </ContentContainer>
        </Container>
    )
}

const Container = styled(PageContainer)`
`;

const Header = styled.header`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Title = styled.h1`
  font-weight: 600;
`;

const Button = styled(GlobalButton)`
  color: ${props => props.theme.GrayScale06};
`;

const Photo = styled.div`
  width: 100%;
  height: 374px;
  background: ${props => props.theme.GrayScale08};
  display: flex;
  justify-content: center;
  align-items: center;
  h4{
    color: ${props => props.theme.GrayScale06};
    font-size: ${props => props.theme.H4};;
  }
`;

export default Upload;