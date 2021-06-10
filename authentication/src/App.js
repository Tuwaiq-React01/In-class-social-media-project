import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import Home from'./Home'
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name:"",
      email:"",
      picture:"",
      token:false
    }
  }
  componentDidMount=()=>{
    if(localStorage.getItem("token")){
      this.setState({name:localStorage.getItem('name')})
      this.setState({email:localStorage.getItem('email')})
      this.setState({picture:localStorage.getItem('picture')})
      this.setState({token:localStorage.getItem('token')})
    }
  }
  componentDidUpdate=()=>{
    if(this.state.token){
      localStorage.setItem("name",this.state.name)
      localStorage.setItem("email",this.state.email)
      localStorage.setItem("picture",this.state.picture)
      localStorage.setItem("token",this.state.token)
    }
  }
  responseFacebook = (response) => {
    if(response.state !=="unknown"){
    this.setState({
      name:response.name,
      email:response.email,
      picture:response.picture,
      token:response.accessToken})
  }else{
    console.log("sign up!")
  }
}
  render() {
    return (
      <center>
        {this.state.token?<Home></Home>:
        <FacebookLogin
          appId="135275661915406"
          autoLoad={false}
          fields="name,email,picture"
          callback={this.responseFacebook} /> }
      </center>
    )
  }
}