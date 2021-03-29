import React from 'react';
import styled from 'styled-components';
import Routes from "./view/components/routes";
import {GlobalStyle} from "./styled/Reset.Styled";

const App = () => {

    return (
        <Container>
            <GlobalStyle/>
            <Routes/>
        </Container>
    )
}

const Container = styled.div`
`;


export default App;