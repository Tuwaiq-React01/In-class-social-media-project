import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import Home from './component/Home'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      picture: "",
      token: null
    }
  }
  componentDidMount =()=>
  {
    if (localStorage.getItem("token"))
    {
      this.setState({name : localStorage.getItem("name")})
      this.setState({email : localStorage.getItem("email")})
      this.setState({picture : localStorage.getItem("picture")})
      this.setState({token : localStorage.getItem("token")})
    }
    else {
      console.log("out")
    }
  }

  componentDidUpdate = () => {
    if (this.state.token) {
      localStorage.setItem("token", this.state.token)
      localStorage.setItem("name", this.state.name)
      localStorage.setItem("email", this.state.email)
      localStorage.setItem("picture", this.state.picture)
    }
  }
  responseFacebook = (response) => {
    this.setState({ name: response.name, email: response.email, picture: response.picture.data.url, token: response.accessToken })
  }
  render() {
    return (
      <div>
        <center>
          <div>
            <h1>LogIn : </h1>
            <Form label="your email" type="text" />
            <Form label="your password" type="password" />

            {this.state.token ? <Home /> : <FacebookLogin
              appId="485706339362929"
              autoLoad={false}
              fields="name,email,picture"
              callback={this.responseFacebook} />}
          </div>
        </center>
      </div>
    )
  }
}
