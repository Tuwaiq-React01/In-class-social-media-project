import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Contact from './Contact';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Route exact path='/' component={App}></Route>
			<Route path='/Contact' component={Contact}></Route>
			<Route path='/logout' component={App}></Route>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
