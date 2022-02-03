import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import reportWebVitals from './reportWebVitals';
import App from './App';
import CreatePoll from './routes/CreatePoll';
import ViewPolls from './routes/ViewPolls'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} /> 
      <Route path='/CreatePoll' element={<CreatePoll />} />
      <Route path='/ViewPolls' element={<ViewPolls />} /> 
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
