import React from 'react';
import './styles/App.scss';
import ContextProvider from './context';
import Main from "./components/Main";

const App = () => (
    <ContextProvider>
        <Main/>
    </ContextProvider>
);


export default App;
