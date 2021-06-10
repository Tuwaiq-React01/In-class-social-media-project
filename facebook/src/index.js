import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Contact from './components/Contact'
import App from './App';
import {Link,BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/logout" component={App}/>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
