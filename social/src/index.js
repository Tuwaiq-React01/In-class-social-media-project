import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from './Component/Contact'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


ReactDOM.render(
  <Router>
  <Link to ='/'> Home </Link>
  <Link to='/contact' >Contact</Link>
  <Route exact path='/' component={App}/>
  <Route path='/contact' component={Contact}/>

</Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
