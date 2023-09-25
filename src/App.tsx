import React from 'react';
import './App.css';
import Main from "./components/Main";
import Navbar from "./components/Navbar";


import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from "./store/storeConfig";
import {GlobalStyle, AppContainer} from "./styled-components/GlobalStyles"
import {Pools} from "./components/Pool/Pools";



function App() {

    return (
        <Router>
            <Provider store={store}>
                <AppContainer fluid={true}>
                    <GlobalStyle/>
                    <Navbar/>
                    <Main/>
                </AppContainer>
            </Provider>      
        </Router>
    );
}

export default App;
