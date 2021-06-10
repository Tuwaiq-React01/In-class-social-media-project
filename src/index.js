import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/logout" component={App} />
  </Router>

  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
