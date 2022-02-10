import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { QuickContact } from './pages';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <App /> } />
            <Route path='quickcontact' element={ <QuickContact /> } />
        </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);
