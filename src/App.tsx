import React from 'react';
import './App.css';
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import {GlobalStyle, AppContainer} from "./styled-components/GlobalStyles"
import PoolHeader from "./components/Pool/PoolHeader";
import {PoolItem} from "./components/Pool/PoolItem";


function App() {


    return (

        <AppContainer fluid={true}>
            <GlobalStyle/>
            <Navbar/>
            <PoolHeader/>
            <PoolItem/>
            <PoolItem/>
            <PoolItem/>
            {/*<Main/>*/}
        </AppContainer>
    );
}

export default App;
