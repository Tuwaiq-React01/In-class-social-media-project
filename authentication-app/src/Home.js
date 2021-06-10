import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom';
import Post from './Post'
import Popup from './Popup'
export default class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"",
            email :"",
            picture :"",
            token:"",
            images:[]
        }
    }
    componentDidMount=()=>{
        this.setState({name: localStorage.getItem('name')})
        this.setState({email: localStorage.getItem('email')})
        this.setState({picture: localStorage.getItem('picture')})

        axios.get('https://dog.ceo/api/breeds/image/random/7')
        .then(res=>{
            console.log(res.data.message)
            this.setState( {images : res.data.message})
        })
    }
        logout=()=>{
           localStorage.clear()
        
    }
    render() {
        return (
            <div>
                <nav>
                    <Link to="/">Home |  </Link>
                    <Link to="/contact">Contact | </Link>
                    <Link to="/logout" onClick={this.logout}>Logout | </Link>
                </nav>
                <div className="pageHeader Home">
                    <img src={this.state.picture} alt="login image"></img>
                    <h4>Name : {this.state.name}</h4>
                    <h4>Email : {this.state.email}</h4>
                </div>
                <Popup></Popup>
                <div className="posts">
                {this.state.images.map((item, index) =>
                    (<Post key={index} title="This is my dog" img={item}></Post>)
                )}
                </div>
            </div>
        )
    }
}
