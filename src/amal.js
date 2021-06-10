import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      picture: "",
      token: ""
    }
  }
  responseFacebook = (response) => {
    this.setState({ name: response.name })
    this.setState({ email: response.email })
    this.setState({ picture: response.picture.data.url })
    this.setState({ token: response.accessToken })
  }
  render() {
    return (
      <center>
        <h1>Login</h1>
        <h2>or login using Facebook</h2>
        <FacebookLogin
          appId="957072475047158"
          autoLoad={true}
          fields="name,email,picture"
          callback={this.responseFacebook} />,
        {this.state.token ?
          <h1>Welcome {this.state.name}</h1>
          : null}
      </center>
    )
  }
}