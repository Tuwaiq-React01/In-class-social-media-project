import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import Form from "./Components/Form";
import "./App.css";
import Home from "./Components/Home";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      picture: "",
      token: null,
    };
  }
  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.setState({
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        picture: localStorage.getItem("picture"),
        token: localStorage.getItem("token"),
      });
      console.log(this.state.token);
    }
  }

  componentDidUpdate = () => {
    if (this.state.token) {
      localStorage.setItem("name", this.state.name);
      localStorage.setItem("email", this.state.email);
      localStorage.setItem("picture", this.state.picture);
      localStorage.setItem("token", this.state.token);
    }
  };

  responseFacebook = (response) => {
    console.log(response);

    this.setState({
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
      token: response.accessToken,
    });
  };

  render() {
    return (
      <center>
        {this.state.token ? (
          <Home />
        ) : (
          <div>
            <h1>Log In</h1>
            <FacebookLogin
              appId="387843689219447"
              autoLoad={false}
              fields="name,email,picture"
              callback={this.responseFacebook}
            />
          </div>
        )}
      </center>
    );
  }
}
