import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Popup from './Popup';
import Post from './Post';


export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : "",
            email:"",
            picutre: "",
            images: []
    
        }
      }

    componentDidMount(){
        this.setState({name: localStorage.getItem('name')})
        this.setState({email: localStorage.getItem('email')})
        this.setState({picture: localStorage.getItem('picture')})

        axios.get('https://dog.ceo/api/breeds/image/random/7')
        .then(res => {
            console.log(res.data.message);
            this.setState({images: res.data.message })
        })
    }


    logout = () => {
        localStorage.clear();
    }


    render() {
        return (
            <div>
                <nav>
                    <Link to="/">Home </Link>
                    <Link to="/contact">Contact </Link>
                    <Link to="/logout" onClick={this.logout}> LOGOUT</Link>
                </nav>

                

                <br />
                <div> 
                    <img src={this.state.picutre} width="250px" alt="facebook account image" />
                    <h4>{this.state.name}</h4>
                    <h5>{this.state.email}</h5>
                </div>


                <Popup />



                {this.state.images.map((item, i) => {
                    
                    return (
                        <Post key={i} title="This is my dog!" src={item} />
                    )
                })}
            </div>
        )
    }
}
