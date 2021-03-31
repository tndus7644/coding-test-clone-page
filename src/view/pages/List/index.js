import React from 'react';
import styled from 'styled-components';
import {ContentContainer, PageContainer} from "../../../styled/Common";
import ItemList from "../../components/ItemList";
import {SearchIcon} from "../../../svg";
import {GlobalButton} from "../../../styled/Button.Styled";

const List = () => {

    return (
        <Container ClassName={"List"}>
            <ContentContainer>
                <Header>
                    <Title>상품 목록</Title>
                    <Search>
                        <SearchIcon/>
                    </Search>
                </Header>
                <Menu>
                    <ul>
                        <li>에코백<span/></li>
                        <li>티셔츠<span/></li>
                        <li>기타물품</li>
                    </ul>
                </Menu>
                <ItemList/>
            </ContentContainer>
        </Container>
    )
}

const Container = styled(PageContainer)`

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

const Header = styled.header`
  padding-top: 38px;
  display: flex;
  justify-content: space-between;
`;

const Search = styled(GlobalButton)`

`;

const Menu = styled.div`
  padding-top: 18px;

  ul {
    display: flex;

    li {
      position: relative;
      margin-right: 25px;
      color: ${props => props.theme.GrayScale06};
      cursor: pointer;
    }

    span {
      position: absolute;
      display: block;
      top: -3px;
      right: -13px;
      width: 1px;
      height: 19px;
      background: ${props => props.theme.GrayScale06};
    }
`;


export default List;