import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 374px;
  height: 100%;
  min-height: 100vh;
  border: 1px solid #ddd;
  margin: 40px auto;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, ${props => (props.alpha || 0.6)});
`;

export const ContentContainer = styled.div`
  padding: 0 13px;
`;
