import React from 'react';
import './App.css';
import styled from "styled-components";
import {Container} from "react-bootstrap";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
    const AppContainer = styled(Container)`
      background: #18202C;
      min-height: 100%;
      padding: 12px;
    `;

    return (

        <AppContainer fluid={true}>
            <Navbar/>
            <Main/>
        </AppContainer>


    );
}

export default App;
