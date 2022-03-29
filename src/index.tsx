import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { QuickContact } from './pages';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <Routes>
            <Route path='/' element={ <App /> } />
            <Route path='quickcontact' element={ <QuickContact /> } />
        </Routes>
    </HashRouter>,
  document.getElementById('root')
);
