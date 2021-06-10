import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import Home from "./Home";

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

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.setState({
        token: localStorage.getItem("token"),
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        picture: localStorage.getItem("picture"),
      });
    }
  }

  componentDidUpdate() {
    if (this.state.token) {
      localStorage.setItem("token", this.state.token);
      localStorage.setItem("name", this.state.name);
      localStorage.setItem("email", this.state.email);
      localStorage.setItem("picture", this.state.picture);
    }
  }

  responseFacebook = (response) => {
    this.setState({
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
      token: response.accessToken,
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.token ? (
          <Home
            picture={this.state.picture}
            name={this.state.name}
            email={this.state.email}
          />
        ) : (
          <div>
            <FacebookLogin
              appId="504276050619986"
              autoLoad={false}
              fields="name,email,picture"
              callback={this.responseFacebook}
            />
          </div>
        )}
      </div>
    );
  }
}
