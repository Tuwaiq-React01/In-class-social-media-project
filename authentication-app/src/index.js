import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contact from './Contact';
import Info from './Info';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
ReactDOM.render(
  <Router>
    <Route exact path = '/' component={App}/>
    <Route path = '/Contact' component={Contact}/>
    <Route path = '/Info' component={Info}/>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
