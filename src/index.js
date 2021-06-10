import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Info from "./Info";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import Error404 from "./Error404";
import Contact from "./Contact";
React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = 'meow'
const logout = ()=>{
    localStorage.clear()
}
ReactDOM.render(

    <React.StrictMode>

        <Router>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/contact"}>Contact</Link>
                </li>
                <li>
                    <Link to={"/info"}>Info</Link>
                </li>
                <li>
                <Link onClick={logout} to={"/logout"}>logout</Link>
            </li>
            </ul>
            <Switch>
            <Route exact path={'/'} component={App}/>
            <Route path={'/contact/'} component={Contact}/>
            <Route path={'/info'} component={Info}/>
            <Route component={Error404}/>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();
