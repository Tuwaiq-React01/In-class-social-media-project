import logo from './logo.svg';
import './App.css';
import FacebookLogin from 'react-facebook-login';
import React, { Component } from 'react'
import Form from './Form'
import Home from './Home'
import FormInput from './Form'
export default class App extends Component {
  constructor(propes){
    super(propes);
    this.state={
      name:"",
      email :"",
      picture :"",
      token:""
    };
  }
  componentDidMount=()=>{
    if(localStorage.getItem("token")){
      this.setState({name: localStorage.getItem('name')})
      this.setState({email: localStorage.getItem('email')})
      this.setState({picture: localStorage.getItem('picture')})
    }
  }
  componentDidUpdate=()=>{
    if (this.state.token){
      localStorage.setItem("token",this.state.token)
      localStorage.setItem("name",this.state.name)
      localStorage.setItem("email",this.state.email)
      localStorage.setItem("picture",this.state.picture)
    }
  }
   responseFacebook = (response) => {
     if(response.status !== "unknown"){
    this.setState({name : response.name})
    this.setState({email : response.email})
    this.setState({picture : response.picture.data.url})
    this.setState({token : response.accessToken})
     }
     else{
  console.log("You are not sign in");
     }
}
  render() {
    
    return (
      <div>
        <center>
          {this.state.token? <Home /> :
            <div>
              <h1>Login</h1>
              <FormInput label="Enter your username" type="text"></FormInput>
              <FormInput label="Enter your password" type="password"></FormInput><br></br>
            <FacebookLogin
            appId="498463594915631"
            autoLoad={false}
            fields="name,email,picture"
            callback={this.responseFacebook} />
            </div>
            // <h5>Welcome {this.state.name} </h5>,
            // <img src={this.state.picture}></img>,
            // <h5>Welcome {this.state.email} </h5>
            }
       </center>
        </div>
    )
  }
}
