import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Contact from "./Components/Contact";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import NavB from "./Components/NavB";
import Home from "./Components/Home";
ReactDOM.render(
  <Router>
    {/* <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/info">Info</Link>
      </li>
    </ul> */}
    <NavB />
    {/* <Switch> */}
    <Route exact path="/" component={App} />
    <Route path="/contact" component={Contact} />
    <Route path="/logout" component={App} />
    {/* <Route component={PageNotFound} /> */}
    {/* </Switch> */}
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
