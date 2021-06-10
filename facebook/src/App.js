import React, { Component } from 'react';
import ReactFacebookLogin from 'react-facebook-login';
import Form from './components/Form'
import Home from './components/Home'
import FacebookLogin from 'react-facebook-login';
import './App.css';


export default class App extends Component {
  constructor(probs){
    super(probs);
    this.state = {
      name: "",
      email: "",
      picture:"",
      token:""
    };
  }

  componentDidMount = () => {
    if(localStorage.getItem("token")){
      this.setState({name: localStorage.getItem('name')})
      this.setState({email: localStorage.getItem('email')})
      this.setState({picture: localStorage.getItem('picture')})
    }
  }
componentDidUpdate = () =>{
  if (this.state.token){
    localStorage.setItem("token", this.state.token)
    localStorage.setItem("name", this.state.name)
    localStorage.setItem("email", this.state.email)
    localStorage.setItem("picture", this.state.picture)
  }
}
      responseFacebook = (response) => {
        this.setState({name: response.name})
        this.setState({email: response.email})
        this.setState({picture: response.picture.data.url})
        this.setState({token: response.accessToken})
      }


      render(){
        return(
          <div style={{
            backgroundColor: 'mistyrose', width=100%, height=100%}}>
        <center >
        {this.state.token ? <Home></Home>:
        <FacebookLogin
          appId="319003199690131"
          autoLoad={false}
          fields="name,email,picture"
          callback={this.responseFacebook} />
        }
        </center>
        </div>
        )
      }
      }
    
    
      
  
