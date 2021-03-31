import React from 'react';
import styled from 'styled-components';
import {Back} from "../../../svg";
import {ContentContainer, InputStyle, PageContainer} from "../../../styled/Common";
import {CheckButton, GlobalButton} from "../../../styled/Button.Styled";
import {navigate} from "../../../lib/History";

const EmailForm = () => {

    const onChange = (e) => {
        console.log("e", e)
    }

    return (
        <Container>
            <Content>
                <Icon onClick={() => navigate("/login")}>
                    <Back/>
                </Icon>
                <Desc>
                    <h1>이메일 주소를 입력해주세요.</h1>
                    <p>이메일주소로 로그인 할 수 있습니다.</p>
                </Desc>
                <form>
                    <label>
                        <InputStyle
                            type="email"
                            id="email"
                            name="email"
                            onChange={onChange}
                            placeholder="이메일"/>
                    </label>
                </form>
            </Content>
            <Content>
                <Button>다음</Button>
            </Content>
        </Container>
    )
}

const Container = styled(PageContainer)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Content = styled(ContentContainer)`

`;

const Icon = styled(GlobalButton)`
  margin-top: 13px;
`;

const Desc = styled.div`
  margin-bottom: 28px;

  h1 {
    margin-top: 44px;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
  }

  p {
    color: ${props => props.theme.GrayScale04};
    font-size: 14px;
    line-height: 28px;
    margin-top: 8px;
  }
`;

const Button = styled(CheckButton)`
  margin-bottom: 24px;
  color: ${props => props.theme.GrayScale09};
`;


export default EmailForm;