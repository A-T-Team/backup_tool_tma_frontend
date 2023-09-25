import styled, {createGlobalStyle} from "styled-components";
import {Container} from "react-bootstrap";

const GlobalStyle = createGlobalStyle`
  body{
    background-color: #18202C;;
    min-height: 100vh;
  }
`
const AppContainer = styled(Container)`
      //background: #18202C;
      //min-height: 100%;
      padding: 0px;
    `;

const PoolMain = styled.div`
  display: flex;
  justify-content: center;
`

export {GlobalStyle, AppContainer, PoolMain};