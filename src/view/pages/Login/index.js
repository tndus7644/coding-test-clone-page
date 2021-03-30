import React from 'react';
import styled from 'styled-components';
import {ContentContainer, PageContainer} from "../../../styled/Common";
import {IconSvg} from "../../../svg";
import LoginForm from "../../components/LoginForm";
import {navigate} from "../../../lib/History";

const Login = () => {

    return (
        <Container ClassName={"Login"}>
            <Content>
                <Icon>
                    <IconSvg/>
                </Icon>
                <LoginForm/>
                <User>
                    <p onClick={() => navigate("/login/email")}>*회원가입</p>
                    <p>*ID / PW 찾기</p>
                </User>
            </Content>
            <Message>
                간편 회원가입시 (주)oo의 <span>이용약관, 개인정보처리방침</span>을 읽고<br/>
                이해하셨으며 해당 내용에 동의하신 것이 됩니다.
            </Message>
        </Container>
    )
}

const Container = styled(PageContainer)`
  background: #fcfcfc;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Content = styled(ContentContainer)`
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 60px;

  svg {
    width: 156px;
    height: 43px;
  }
`;

const User = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 12px;
  color: ${props => props.theme.GrayScale02};

  p {
    font-size: 12px;
    margin-left: 15px;
    cursor: pointer;
  }
`;

const Message = styled.h3`
  text-align: center;
  word-break: keep-all;
  font-size: 10px;
  color: #767676;

  span {
    color: #000;
    font-size: 10px;
  }
`;


export default Login;