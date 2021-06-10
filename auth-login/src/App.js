import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login'
import Home from './Home'

import './App.css'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      picture: "",
      token: null,
    };
  }
//once the page ploaded

componentDidMount= () => {
  if(localStorage.getItem("token"))
  {
    //from local storage to aviode return data from initial
    this.setState({name: localStorage.getItem('name') })
    this.setState({email: localStorage.getItem('email') })
    this.setState({picture: localStorage.getItem('picture') })
    this.setState({token: localStorage.getItem('token') })

  }
}
  //to Remeber the user if tehre is un upadate
componentDidUpdate=() =>
{
  if (this.state.token){
    localStorage.setItem("token", this.state.token)
  localStorage.setItem("name", this.state.name)
  localStorage.setItem("email", this.state.email)

  localStorage.setItem("picture", this.state.picture)

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
        <h1>Dogs Posts</h1>
        {this.state.token? <Home></Home> :
        <FacebookLogin
          appId="319003199690131"
          autoLoad={false}
          fields="name,email,picture"
          callback={this.responseFacebook} />
        }
        
      </center>
    )
  }
}




