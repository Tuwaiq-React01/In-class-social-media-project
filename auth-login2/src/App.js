import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import Form from "./components/Form";
import { Link } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      picture: "",
      token: "",
    };
  }

  responseFacebook = (response) => {
    if (response.status !== "unknown") {
      this.setState({
        name: response.name,
        email: response.email,
        picture: response.picture.data.url,
        token: response.accessToken,
      });
    }
  };

  componentDidMount = () => {
    if (localStorage.getItem("token")) {
      console.log("localStorage");
      this.setState({
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        picture: localStorage.getItem("picture"),
        token: localStorage.getItem("token"),
      });
    }
  };

  componentDidUpdate = () => {
    if (this.state.token) {
      localStorage.setItem("token", this.state.token);
      localStorage.setItem("name", this.state.name);
      localStorage.setItem("email", this.state.email);
      localStorage.setItem("picture", this.state.picture);
    }
  };

  render() {
    console.log(this.state.token.length);
    return (
      <div className="App">
        {/* <h1>Login</h1>
        <Form label="Enter your name" type="text" />
        <Form label="Enter your password" type="password" />
        <h2>or login using Facebook</h2> */}
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {this.state.token ? (
          <div>
            <img src={this.state.picture} /> <h3>Welcome {this.state.name}</h3> */}
        {/* <Contact /> */}
        {/* </div>
        ) : null} */}
        {this.state.token.length > 0 ? (
          <Home />
        ) : (
          <FacebookLogin
            appId="175838644478520"
            autoLoad={false}
            fields="name,email,picture"
            callback={this.responseFacebook}
          />
        )}
      </div>
    );
  }
}
