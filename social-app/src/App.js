import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import FormInput from './Form'
import Home from './Home'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      picture: "",
      token: ""
    };
  }
  responseFacebook = (response) => {
    if (response.status !== "unknown") {
      this.setState({ name: response.name })
      this.setState({ email: response.email })
      this.setState({ picture: response.picture.data.url })
      this.setState({ token: response.accessToken })
    }
    else {
      console.log("you are not singned in");
    }
  }
  componentDidMount(){
    if(localStorage.getItem("token")){
      this.setState({name: localStorage.getItem('name')})
      this.setState({email: localStorage.getItem('email')})
      this.setState({picture: localStorage.getItem('picture')})
      this.setState({token: localStorage.getItem('token')})
    }
  }
  componentDidUpdate(){
    if(this.state.token){
      localStorage.setItem("token", this.state.token);
      localStorage.setItem("name", this.state.name);
      localStorage.setItem("email", this.state.email);
      localStorage.setItem("picture", this.state.picture);
    }
  }
  render() {
    return (
      <center>
        {this.state.token ? <Home></Home> : <>
          <h1>Login</h1>
          <FormInput label="Enter your username" type="text"></FormInput>
          <FormInput label="Enter your password" type="password"></FormInput>
          <h2>or login using Facebook</h2>
          <FacebookLogin
            appId="931621370731651"
            autoLoad={false}
            fields="name,email,picture"
            callback={this.responseFacebook} /></>
        }
        {this.state.token ?
          <div>
            <h3>Welcome {this.state.name}</h3>
            <img src={this.state.picture} alt="img"></img>
            <h3>The email {this.state.email} is authorized</h3>
          </div>
          : null
        }
      </center>
    )
  }
}