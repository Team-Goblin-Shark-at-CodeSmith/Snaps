import React from 'react'
import ReactDOM from 'react-dom'
//import './index.css'
import App from './App.jsx'
import { store } from './store' //store.js
import { Provider } from 'react-redux' // base thing needed for redux App
import { createRoot } from "react-dom/client";

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
