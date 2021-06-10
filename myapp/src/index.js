import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Info from './component/Info'
import Contact from './component/Contact'
import PageNF from './component/PageNotFound'
import {Route , BrowserRouter as Router ,Switch } from 'react-router-dom'


ReactDOM.render(
  <Router>
    <Switch>
    <Route exact path='/' component={App} />
    <Route path='/logout' component={App} />
    <Route component={PageNF} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
