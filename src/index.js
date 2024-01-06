import React from 'react'
import ReactDOM from 'react-dom'
//import './index.css'
import App from './App.jsx'
import { store } from './store' //store.js
import { Provider } from 'react-redux' // base thing needed for redux App

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)