import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route,Link,BrowserRouter as Router,Switch}from 'react-router-dom'
import Contact1 from './Contact1'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route exact path="/" component={App}>
      </Route>
      <Route path="/Contact" component={Contact1}>
      </Route>
      <Route path="/logout" component={App}>
      </Route>

    
    
 
    
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
