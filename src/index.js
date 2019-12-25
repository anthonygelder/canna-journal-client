import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { EntryListProvider } from './Context/EntryListContext'
import App from './App';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <EntryListProvider>
            <App />
        </EntryListProvider>
    </BrowserRouter>,
    document.getElementById('root')
);