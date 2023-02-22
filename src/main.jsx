import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import './index.css';

import "./custom-bootstrap.scss"
import "bootstrap/dist/js/bootstrap.bundle";
import { Provider } from "react-redux";
import store from "./app/store"

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  </React.StrictMode>,
);
