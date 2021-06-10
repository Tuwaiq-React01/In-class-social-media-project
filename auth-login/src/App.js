import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import './App.css'
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
  logout=()=>{
    localStorage.clear()
}
  render() {
    return (
      <center>
        {this.state.token ? <Home></Home> :
          <div>
            <h2>login </h2>
            <FacebookLogin
              appId="549489506414911"
              autoLoad={true}
              fields="name,email,picture"
              callback={this.responseFacebook} />
          </div>
        }
      </center>
    )
  }
}
