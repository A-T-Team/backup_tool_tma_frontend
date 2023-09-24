import React from 'react';
import './App.css';
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import {GlobalStyle, AppContainer} from "./styled-components/GlobalStyles"
import { BrowserRouter as Router } from 'react-router-dom';


function App() {


    return (
        <Router>
        <AppContainer fluid={true}>
            <GlobalStyle/>
            <Navbar/>
            <Main/>
        </AppContainer>
        </Router>
    );
}

export default App;
