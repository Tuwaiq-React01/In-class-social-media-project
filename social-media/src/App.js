import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import "./App.css"
import Home from './Home';

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

  componentDidMount=()=>{
    if(localStorage.getItem("token")){
      this.setState({token: localStorage.getItem('token')})
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
        {this.state.token? <Home></Home>:<FacebookLogin
          appId="337867537730918"
          autoLoad={false}
          fields="name,email,picture"
          callback={this.responseFacebook}
        />
        }
      </center>
    )
  }
}
