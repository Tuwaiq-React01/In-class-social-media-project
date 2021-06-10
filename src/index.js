import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Contact from "./Components/Contact";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import NavB from "./Components/NavB";

ReactDOM.render(
  <Router>
    <NavB />
    <Route exact path="/" component={App} />
    <Route path="/contact" component={Contact} />
    <Route path="/logout" component={App} />

  </Router>,
  document.getElementById("root")
);

reportWebVitals();
