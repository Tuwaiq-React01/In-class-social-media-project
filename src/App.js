import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import FormInput from "./Form"
import Home from './Components/Home'


export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            picture: "",
            token:""
        }
    }

    //we want the didMount
    componentDidMount=()=>{

        if(localStorage.getItem("token")){
            this.setState({token: localStorage.getItem("token")})
            this.setState({name: localStorage.getItem("name")})
            this.setState({picture: localStorage.getItem("picture")})
            this.setState({email: localStorage.getItem("email")})
        }
    }

    //if updated
    componentDidUpdate = () => {
        if (this.state.token){
            localStorage.setItem("token" , this.state.token)
            localStorage.setItem("name" , this.state.name)
            localStorage.setItem("email" , this.state.email)
            localStorage.setItem("picture" , this.state.picture)
        }
    }

     responseFacebook = (response) => {
         if(response.status !=="unknown"){
            console.log(response);
            this.setState({name: response.name})
            this.setState({email: response.email})
            this.setState({picture: response.picture.data.url})
            this.setState({token : response.accessToken})

         }
         else{
            console.log("You are not signed in")
         }

        
        
      }
    render() {
     
        return (
            <center>
                
                {
                    this.state.token ? <Home/> : <FacebookLogin
                    appId="200067995305467"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={this.responseFacebook} />
                    
                       
                }
                
                        
                    
            </center>
        )
    }
}




