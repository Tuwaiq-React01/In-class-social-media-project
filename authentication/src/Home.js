import axios from 'axios'
import React, { Component } from 'react'
import {BrowserRouter as Router,
     Link} from 'react-router-dom'
import Popup from './Popup'
import Post from './Post'
export default class Home extends Component {
constructor(props){
    super(props)
    this.state = {
        name: "",
        picture:"",
        email: "",
        images: []
    }
}
    componentDidMount = () =>{
        this.setState({name: localStorage.getItem('name')})
        this.setState({email: localStorage.getItem('email')})
        this.setState({picture: localStorage.getItem('picture')})

        axios.get('https://dog.ceo/api/breeds/image/random/7')
        .then(res => {
            this.setState({images: res.data.message})
        })
    }
Logout = () =>{
    localStorage.clear()
}
    render() {
        return (
            <div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/Logout" onClick={this.Logout}>Logout</Link>


                </nav>
                <div className="pageHeader">
                <img className="avatar" alt="avatar" src={this.state.picture}></img>
                <h4>{this.state.name}</h4>
                <h5>{this.state.email}</h5>
                </div>
                <h1 className="tit">Home Page</h1>

                <Popup/>
                {this.state.images.map((item,index) => {
                    return(
              <div className="col">
                <div className="row-sm-4">
                    <Post key={index} title="Dogs" img={item}></Post>
                </div>
                </div>

                    )
                })}
            </div>
        )
    }
}
