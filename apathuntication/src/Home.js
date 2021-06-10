import axios from 'axios'
import Post from './components/Post'
import React, { Component } from 'react'
// import Form from './Form';
import {Link} from 'react-router-dom'
import Popup from './components/popup'

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state ={
            name:"",
            email:"",
            picture:"",
            images:[]
        }
    }
    componentDidMount =() =>{
        this.setState({name: localStorage.getItem('name')})
        this.setState({email: localStorage.getItem('email')})
        this.setState({picture: localStorage.getItem('picture')})
        axios.get('https://dog.ceo/api/breeds/image/random/7').then (res =>{
            this.setState({images: res.data.message})
        })
    }
    logout=()=>{
        localStorage.clear()
    }
    render() {
        return (
            <div>
                <nav>
                    <Link to ="/"> Home</Link>
                    <Link to = "/contact">Contact</Link>
                    <Link to = "/logout" onClick={this.logout}>logout</Link>
                </nav>
                <div className="pageHeader">
                    <img className="avatar" src = {this.state.picture}/>
                    <h4>{this.state.name}</h4>
                    <h5>{this.state.email}</h5>
                </div>
                <Popup/>
                {this.state.images.map((item,index) => {
                    return <Post key={index} title="plue title happy " src={item}/>
                })}
            </div>
        )
    }
}












