import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Post from './Post'
import Popup from './Popup'

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            name: "",
            email:"",
            picture:"",
            images:[] 
        }
    }
    
    componentDidMount = ()=> {
        this.setState({name : localStorage.getItem('name')})
        this.setState({email : localStorage.getItem('email')})
        this.setState({picture : localStorage.getItem('picture')})
        axios.get('https://dog.ceo/api/breeds/image/random/7').then(res =>{
          this.setState({images: res.data.message})
        })
    }

    logout = () => {
        localStorage.clear()
    }


    render() {
        console.log(this.state.images);
        return (
            <div>
                <nav>
                    <Link to ='/'>Home | </Link>
                    <Link to ='/contact'>Contact | </Link>
                    <Link to ='/logout'>Logout</Link>
                </nav>
                <div className="PageHeader">
                    <img className="avatar" alt="avatart" src={this.state.picture}></img>
                    <h2>{this.state.name}</h2>
                    <h2>{this.state.email}</h2>
                </div>
                <Popup/>
                {this.state.images.map((item ,index ) => (
                    <Post key={index} title="This is my dog" img={item} />
                ))}
            </div>
        )
    }
}