import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import FormInput from './Form'
import './App.css'
import home from './component/Home'
import Home from './component/Home'
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
  componentDidMount = () => {
    if (localStorage.getItem("token")) {
      this.setState({ token: localStorage.getItem("token") })
      this.setState({ name: localStorage.getItem("name") })
      this.setState({ email: localStorage.getItem("email") })
      this.setState({ picture: localStorage.getItem("picture") })
    }
  }
  componentDidUpdate() {
    if (this.state.token) {
      localStorage.setItem("token", this.state.token)
      localStorage.setItem("name", this.state.name)
      localStorage.setItem("email", this.state.email)
      localStorage.setItem("picture", this.state.picture)
    }
  }
  render() {
    return (
      <center>
        {this.state.token ? <Home></Home> :
          <div>
            <FormInput label="Enter your username" type="text"></FormInput>
            <FormInput label="Enter your password" type="password"></FormInput>
            <h2>or login using Facebook</h2>
            <FacebookLogin
              appId="957072475047158"
              autoLoad={true}
              fields="name,email,picture"
              callback={this.responseFacebook} />
          </div>
        }
      </center>
    )
  }
}
