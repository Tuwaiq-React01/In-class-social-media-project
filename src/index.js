import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route,Link,BrowserRouter as Router, Switch} from 'react-router-dom'
import Contact from './Contact';
ReactDOM.render(
  <Router>
  <Route exact path="/" component={App}/>
  <Route  path="/Contact" component={Contact}/>
  <Route  path="/logout" component={App}/>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();