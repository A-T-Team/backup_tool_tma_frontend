import React from 'react';
import './App.css';
import styled from "styled-components";
import {Container} from "react-bootstrap";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
const AppContainer = styled(Container)`
      background: #18202C;
      min-height: 100%;
      padding: 12px;
    `;
function App() {


    return (
        <AppContainer fluid={true}>
            <Navbar/>
            <Main/>
        </AppContainer>
    );
}

export default App;
