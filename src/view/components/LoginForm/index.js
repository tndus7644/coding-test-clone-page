import React from 'react';
import styled from 'styled-components';
import {GlobalButton} from "../../../styled/Button.Styled";
import {InputStyle} from "../../../styled/Common";

const LoginForm = () => {

    return(
        <Container>
            <Form method={"post"}>
                <Label htmlFor="loginId">
                    <InputStyle type="email" id="loginId" name="loginId" placeholder="로그인"/>
                </Label>
                <Label htmlFor="loginPw">
                    <InputStyle type="password" id="loginPw" name="password" placeholder="비밀번호"/>
                </Label>
                <Button type="submit" disabled="disabled">로그인</Button>
            </Form>
        </Container>
    )
}

const Container = styled.div`

`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 12px;
`;

const Button = styled(GlobalButton)`
  margin-top: 4px;
  background: ${props => props.theme.MainColor};
  color: ${props => props.theme.GrayScale09};
  height: 56px;
  font-size: 15px;
  border-radius: 8px;
  cursor: pointer;
`;

export default LoginForm;