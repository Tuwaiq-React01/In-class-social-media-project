import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from './components/Contact'
import {BrowserRouter as Router, Route, } from 'react-router-dom'

ReactDOM.render(
 <Router>
<Route exact path ="/" component={App} />
<Route path="/contact" component = {Contact} />
<Route path="/Logout" component = {App} />
 </Router>,
  document.getElementById('root')
);
