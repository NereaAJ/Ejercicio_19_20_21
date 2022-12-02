import React from 'react';
import ReactDOM from 'react-dom/client';
//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// ! Importate dejar los estilos promios por debajo
import './index.css';

import 'randomcolor';

import App from './App';
import AppRoutingOne from './AppRoutingOne'
import reportWebVitals from './reportWebVitals';
import AppRoutingFinal from './AppRoutingFinal';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <AppRoutingOne /> */}
    {/* <AppRoutingFinal/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
