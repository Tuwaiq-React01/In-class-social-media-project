import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contact from './components/Contact'
import { BrowserRouter as Router, Route } from 'react-router-dom'


ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/Contact" component={Contact} />
    <Route path="/logout" component={App} />
  </Router>,
  document.getElementById('root')
);


reportWebVitals();
