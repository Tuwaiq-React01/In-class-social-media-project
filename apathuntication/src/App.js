import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import FormInput from './components/Form'
import './App.css'
import Home from './Home'


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
  componentDidMount =() =>{
    if(localStorage.getItem("token")){
      this.setState({name: localStorage.getItem('name')})
      this.setState({email: localStorage.getItem('name')})
      this.setState({picture: localStorage.getItem('picture')})

    }}

  componentDidUpdate =() =>{
    if(this.state.token){
      localStorage.setItem("Token",this.state.token)
      localStorage.setItem("name",this.state.name)
      localStorage.setItem("email",this.state.email)
      localStorage.setItem("picture",this.state.picture)

    }
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
  render() {
    return (
      <center>
        <h1>Login</h1>
        <FormInput label="Enter your username" type="text"></FormInput>
        <FormInput label="Enter your password" type="password"></FormInput>
        <h2>or login using Facebook</h2>
            {this.state.token ?  <Home></Home>  :
       <FacebookLogin 
          appId="316269926623294"
          autoLoad={false}
          fields="name,email,picture"
          callback={this.responseFacebook} />
       }
  
      </center>
    )
  }}
  