import React, {useState} from 'react';
import styled from 'styled-components';
import {ContentContainer, InputStyle, PageContainer} from "../../../styled/Common";
import {navigate} from "../../../lib/History";
import {Back} from "../../../svg";
import {GlobalButton} from "../../../styled/Button.Styled";
import {useDispatch} from "react-redux";
import {Action} from "../../../redux/reducer";

const Upload = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [detail, setDetail] = useState('');

    const onSubmit = () => {
        navigate('/upload/list');
        dispatch(Action.Creators.setList(
            {
                name: name,
                price: price,
                detail: detail,
            }))
    }

    return (
        <Container ClassName={"Upload"}>
            <ContentContainer>
                <Header>
                    <Icon onClick={() => navigate("/")}>
                        <Back/>
                    </Icon>
                    <Title>등록하기</Title>
                    <Button onClick={onSubmit}>완료</Button>
                </Header>
            </ContentContainer>
            <Photo>
                <h4>사진을 등록하세요.</h4>
            </Photo>
            <UploadContent>
                <form>
                    <label>
                        <h1>제품명</h1>
                        <InputStyle
                            type="text"
                            name="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="제품명 입력"/>
                    </label>
                </form>
                <form>
                    <label>
                        <h1>가격</h1>
                        <InputStyle
                            type="text"
                            id="price"
                            name="price"
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                            placeholder="가격 입력"/>
                    </label>
                </form>
                <Detail>
                    <label>
                        <h1>상세 설명</h1>
                        <InputStyle
                            rows={"10"}
                            cols={"50"}
                            name="detail"
                            value={detail}
                            onChange={e => setDetail(e.target.value)}
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

  form {
    margin-bottom: 24px;
  }
`;

const Detail = styled.form`
  height: 100%;

  input {
    width: 100%;
    height: 256px;
  }
`;

export default Upload;