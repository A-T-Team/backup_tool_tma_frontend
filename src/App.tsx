import React from 'react';
import './App.css';
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import {GlobalStyle, AppContainer} from "./styled-components/GlobalStyles"


function App() {


    return (

        <AppContainer fluid={true}>
            <GlobalStyle/>
            <Navbar/>
            <Main/>
        </AppContainer>
    );
}

export default App;
