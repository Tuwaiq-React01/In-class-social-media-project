import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import './App.css'
import Home from './Components/Home';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name:"",
      email:"",
      picture:"",
      token:""
    }
  }
   responseFacebook = (response) => {
    this.setState({name:response.name})
    this.setState({email:response.email})
    this.setState({picture:response.picture.data.url})
    this.setState({token:response.accessToken})
  }
  // get the values
  componentDidMount=()=>{
    if(localStorage.getItem("token")){
      this.setState({token:localStorage.getItem("token")})
      this.setState({name:localStorage.getItem("name")})
      this.setState({email:localStorage.getItem("email")})
      this.setState({picture:localStorage.getItem("picture")})
    }
  }
  // set
  componentDidUpdate=() =>{
    if(this.state.token){
    localStorage.setItem("token",this.state.token)
    localStorage.setItem("name",this.state.name)
    localStorage.setItem("email",this.state.email)
    localStorage.setItem("picture",this.state.picture)
    }
  }
  render() {
    return (
      <center>
       
        {/* <h1>Login</h1>
        <Form lable="Enter you name" type="text"/>
        <Form lable="Enter you password" type="password"/>
        <h2>or login using facebook</h2> */}
         {this.state.token? <Home></Home>:<FacebookLogin
            appId="175838644478520"
            autoLoad={true}
            fields="name,email,picture"
            //onClick={componentClicked}
            callback={this.responseFacebook} />}
    
     
    {/* {this.state.token?
    <div>
      <h3>✪ ω ✪</h3>
    <h3>Welcome {this.state.name}</h3>
    <h3>Your Email : {this.state.email}</h3>
    <img src={this.state.picture}/>
    </div>
    :null} */}
    
      </center>
    )
  }
}
