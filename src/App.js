import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import {useState} from 'react'
import From from './components/From';
import Home from './components/Home';
import axios from 'axios';
import "./App.css";


export default class App extends Component {
  constructor(){
    super()
    this.state = {
      name : '',
      email : '',
      picture : '',
      token : ''

    }
  }

  componentDidMount(){
    if(localStorage.getItem("token"));

    this.setState({name: localStorage.getItem('name')})
    this.setState({email: localStorage.getItem('email')})
    this.setState({picture: localStorage.getItem('picture')})
    this.setState({token: localStorage.getItem('token')})
  }



  componentDidUpdate(){
    localStorage.setItem("token", this.state.token)
    localStorage.setItem("name", this.state.name)
    localStorage.setItem("email", this.state.email)
    localStorage.setItem("picture", this.state.picture)
  }


  responseFacebook(response){
    this.setState({name : response.name})
    this.setState({email : response.email})
    this.setState({picture : response.picture.data.url})
    this.setState({token : response.accessToken})
  }


  render() {
    return (
            <center> 
{/* <h1>LOGIN </h1>
<From label="Enter your name" type="text"/>
<From label="Enter your password" type="password"/>
 */}

<h2>using Facebook: </h2>


{this.state.token ? <Home /> : <FacebookLogin
    appId="4047272591988986"
    // appId="3065896963683453"
    autoLoad={false}
    fields="name,email,picture"
    callback={this.responseFacebook}
    cssClass="my-facebook-button-class"
    icon="fa-facebook"
  />
  }
  
  </center>
    )
  }
}
