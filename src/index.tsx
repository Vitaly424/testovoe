import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { SearchProvider } from "./providers/SearchProvider";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <SearchProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </SearchProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
