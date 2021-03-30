import React from 'react';
import styled from 'styled-components';
import {GlobalButton} from "../../../styled/Button.Styled";

const LoginForm = () => {

    return(
        <Container>
            <Form method={"post"}>
                <Label htmlFor="loginId">
                    <Input type="email" id="loginId" name="loginId" placeholder="로그인"/>
                </Label>
                <Label htmlFor="loginPw">
                    <Input type="password" id="loginPw" name="password" placeholder="비밀번호"/>
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

const Input = styled.input`
  width: 100%;
  padding: 14px 12px;
  border-radius: 8px;
  background: #fff;
  border: 1px solid #eaeaea;

  &:focus {
    outline: 0;
  }
`;

const Button = styled(GlobalButton)`
  margin-top: 4px;
  background: #226bef;
  color: #fff;
  height: 56px;
  font-size: 15px;
  border-radius: 8px;
  cursor: pointer;
`;

export default LoginForm;