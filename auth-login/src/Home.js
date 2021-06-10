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
            images:[] //beacuse the images links return from API as an array
        }
    }
    //
    componentDidMount = ()=> {

        this.setState({name : localStorage.getItem('name')})
        this.setState({email : localStorage.getItem('email')})
        this.setState({picture : localStorage.getItem('picture')})

        axios.get('https://dog.ceo/api/breeds/image/random/7').then(res =>{
          this.setState({images: res.data.message})
        })
        
    }

    logout () 
    {
        localStorage.clear()
    }
    render() {
        console.log(this.state.images);
        return (
            <div>
                <nav>
                    <Link className="Links" to ='/'>Home</Link>
                    <Link className="Links"  to ='/contact'>Contact</Link>
                    <Link className="Links"  to ="/logout" onClick={this.logout}>logout</Link>
                </nav>
                <div className="pageHeader">
                    <img className="avatar" alt="avatart" src={this.state.picture}></img>
                    <h2>{this.state.name}</h2>
                    <h2>{this.state.email}</h2>
                </div>
                <Popup></Popup>
                {this.state.images.map((itemm ,index ) => (

                    <Post key={index} title="This is my dog" img={itemm} />
                ))}
            </div>


        )
    }
}
