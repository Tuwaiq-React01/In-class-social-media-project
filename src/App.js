import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';

import Home from './Components/Home.js';
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      pic: "",
      token: ""
    }
  }

  componentDidMount = () => {
    if (localStorage.getItem("token")) {
      this.setState({ name: localStorage.getItem('name') })
      this.setState({ email: localStorage.getItem('email') })
      this.setState({ pic: localStorage.getItem('picture') })
      this.setState({ token: localStorage.getItem("token") })
    }
  }

  componentDidUpdate = () => {
    if (this.state.token) {
      localStorage.setItem("token", this.state.token)
      localStorage.setItem("name", this.state.name)
      localStorage.setItem("email", this.state.email)
      localStorage.setItem("picture", this.state.pic)
    }
  }
  responseFacebook = (response) => {
    if (response.state !== "unknown") {
      console.log(response);

      this.setState({
        name: response.name,
        email: response.email,
        pic: response.picture.data.url,
        token: response.accessToken
      })
    }
  }
  render() {
    return (
      <center>
        {this.state.token ? <Home></Home> : <FacebookLogin
          appId="1776021115902115"
          autoLoad={false}
          fields="name,email,picture"
          callback={this.responseFacebook} />}

      </center>
    )
  }
}
