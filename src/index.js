import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contact from './Components/Contact';
import {Route,BrowserRouter as Router}from 'react-router-dom'

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App}/>
    <Route  path="/contact" component={Contact}/>
    <Route  path="/logout" component={App}/>
    
    </Router>
  ,
  document.getElementById('root')
);


reportWebVitals();
