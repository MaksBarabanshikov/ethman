import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './Styles/reset.css';
import './Styles/index.css';
import App from './App';


ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename="/">
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('ethmen')
);

