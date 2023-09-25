import React from 'react';
import './App.css';
import Main from "./components/Main";
import Navbar from "./components/Navbar";


import { BrowserRouter as Router } from 'react-router-dom';
import {GlobalStyle, AppContainer, PoolMain} from "./styled-components/GlobalStyles"
import PoolHeader from "./components/Pool/PoolHeader";
import {Pools} from "./components/Pool/Pools";



function App() {


    return (
        <Router>
        <AppContainer fluid={true}>
            <GlobalStyle/>
            <Navbar/>

            <Pools/>

            {/*<Main/>*/}
        </AppContainer>
        </Router>
    );
}

export default App;
