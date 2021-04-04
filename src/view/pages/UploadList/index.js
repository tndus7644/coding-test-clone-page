import React from 'react';
import styled from 'styled-components';
import {ContentContainer, Header, PageContainer} from "../../../styled/Common";
import {useSelector} from "react-redux";
import UploadItem from "../../components/UploadList";

const UploadList = () => {

    const {list} = useSelector(state => state);

    console.log("list", list)

    return (
        <Container>
            <ContentContainer>
                <Header>
                    <Title>등록한 상품 목록</Title>
                </Header>
                {list.map((item, index) => <UploadItem key={index} {...item}/>)}
            </ContentContainer>
        </Container>
    )
}

const Container = styled(PageContainer)`

`;

const Title = styled.h1`
  font-weight: 600;
  font-size: ${props => props.theme.H1};
`;


export default UploadList;