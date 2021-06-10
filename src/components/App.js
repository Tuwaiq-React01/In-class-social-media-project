import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import Home from './Home'


export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {  // to save dynamic variable(changeble)
      myname:"",
      myemail:"",
      mypicture: "",
      token:""
    }
  }
  componentDidMount = () => {
    if(localStorage.getItem("token")){
      this.setState({myname:localStorage.getItem("name")});
      this.setState({mypicture:localStorage.getItem("picture")});
      this.setState({myemail:localStorage.getItem("email")});
      this.setState({token:localStorage.getItem("token")});
    }
  }
  componentDidUpdate = () =>{
    if(this.state.token){
      localStorage.setItem("name",this.state.myname)
      localStorage.setItem("picture",this.state.mypicture)
      localStorage.setItem("email",this.state.myemail)
      localStorage.setItem("token",this.state.token)
    }
  }
  responseFacebook = (response) => {
    // if(){}
    this.setState({ 
      myname:response.name,
    myemail:response.email,
    mypicture:response.picture.data.url,
    token :response.accessToken,
    RioDan: "Yo"
    
  })}
  render() {
    return (
      <center>
          {this.state.token
          ?<Home></Home>
          :
          <div className="body-background">

          <img src="https://lh3.googleusercontent.com/proxy/mjriBXdiUHQO3xzYD3TlVrnY1YAvYMzQObtaSuSJCNf68DBOV7CS0DLHZTD2fPQwpPgb6vJRhJhtnP3-ynCFLzKLJNrZSqVkx04" style={{marginBottom:"-55px", zIndex:1}}></img>
          <div className="board" >
            <h4>
            Please ..
            </h4>
          <FacebookLogin
          appId="************"
          autoLoad={false}// to autoload the sign in when reftesh the page.
          fields="name,email,picture"
          callback={this.responseFacebook} />
          </div>
          </div>
          }
      </center>
    )
  }
}
