import React from 'react';
import styled from 'styled-components';

const Layout = ({data, render}) => {

    return (
        <Container>
            <Row>
                {
                    data.map((item, index) =>
                        <Col key={index}>
                            {render(item)}
                        </Col>)
                }
            </Row>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -6px;
  margin-right: -6px;
`;

const Col = styled.div`
  width: 50%;
  padding: 6px;
`;

export default Layout;