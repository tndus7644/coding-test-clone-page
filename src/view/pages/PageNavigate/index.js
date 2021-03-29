import React from 'react';
import styled from 'styled-components';
import {PageButton} from "../../../styled/Button.Styled";

const PageNavigate = () => {

    return(
        <Container ClassName={"PageNavigate"}>
            <Title>구현한 페이지 목록</Title>
            <ButtonGroup>
                <PageButton to={"/home"}>홈</PageButton>
                <PageButton to={"/list"}>제품목록</PageButton>
                <PageButton to={"/upload"}>등록하기</PageButton>
                <PageButton to={"/mylist"}>마이페이지</PageButton>
            </ButtonGroup>
        </Container>
    )
}

const Container = styled.div`

`;

const Title = styled.h1`
  color: #226bef;
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default PageNavigate;