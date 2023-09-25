import React from 'react';
import './App.css';
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import {GlobalStyle, AppContainer} from "./styled-components/GlobalStyles"
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from "./store/storeConfig";

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
