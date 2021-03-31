import React from 'react';
import styled from 'styled-components';
import {ContentContainer, InputStyle, PageContainer} from "../../../styled/Common";
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
            <UploadContent>
                <Name>
                    <label>
                        <h1>제품명</h1>
                        <InputStyle
                            type="text"
                            id="name"
                            name="name"
                            placeholder="제품명 입력"/>
                    </label>
                </Name>
                <Price>
                    <label>
                        <h1>가격</h1>
                        <InputStyle
                            type="text"
                            id="price"
                            name="price"
                            placeholder="가격 입력"/>
                    </label>
                </Price>
                <Detail>
                    <label>
                        <h1>상세 설명</h1>
                        <InputStyle
                            rows={"10"}
                            cols={"50"}
                            name="detail"
                            placeholder="상세 설명 입력"/>
                    </label>
                </Detail>
            </UploadContent>
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

  h4 {
    color: ${props => props.theme.GrayScale06};
    font-size: ${props => props.theme.H4};;
  }
`;

const UploadContent = styled(ContentContainer)`
  margin-top: 20px;

  h1 {
    font-size: ${props => props.theme.H1};
    font-weight: 600;
    margin-bottom: 10px;
  }

  div {
    margin-bottom: 24px;
  }
`;

const Name = styled.div`

`;

const Price = styled.div`

`;

const Detail = styled.div`
  height: 100%;

  input {
    width: 100%;
    height: 256px;
  }
`;

export default Upload;