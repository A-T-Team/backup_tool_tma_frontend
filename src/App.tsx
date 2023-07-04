import React from 'react';
import './App.css';
import styled from "styled-components";
import {Container} from "react-bootstrap";
import Main from "./components/Main";

function App() {
    const AppContainer = styled(Container)`
      padding: 20px;
      background: #18202C;
    `;

    return (
        <AppContainer fluid>
            <Main/>
        </AppContainer>


    );
}

export default App;
