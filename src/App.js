import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import Form from './Form';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      token: "",
      name: "",
      email: "", 
      picture: ""
    }    
  }

  responseFacebook = (response) => {
    console.log("response");
    this.setState({
      token:response.accessToken,
      name: response.name,
      email: response.email, 
      picture: response.picture, 
    })
    console.log(response);
  }

  componentDidMount(){
    if(localStorage.getItem("token")){
      this.setState({
        name: localStorage.getItem("name"),
        email: localStorage.getItem("email"),
        picture: localStorage.getItem("picture"),
        token: localStorage.getItem("token"), 
      })
    }
  }

  componentDidUpdate(){
    if(this.state.token){
      console.log("there is a token")
      localStorage.setItem("name", this.state.name);
      localStorage.setItem("email", this.state.email);
      localStorage.setItem("token", this.state.token);
      localStorage.setItem("picture", this.state.picture);
    }
  }

  render() {    
    return (
        <div className="d-flex flex-column" align="center">
          <div class="p-2">
            <h1 className="display-4">Welcome the Dog Post APP!!</h1>
            </div>
      {this.state.token? <Home></Home> :
      <div class="p-2">
      <FacebookLogin
      appId="239056987553093"
      autoLoad={false}
      fields="name,email,picture"
      callback={this.responseFacebook} />
      </div>}    
      </div>
    )
  }
}
