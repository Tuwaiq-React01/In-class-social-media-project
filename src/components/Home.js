import React, { Component } from 'react'
import axios from 'axios' 
import Post from './Post'
import Popup from './Popup';
import NavBa from './NavBa';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state ={
            imgs:[],
            myname:"",
            myemail:"",
            mypicture: "",
            token:""
        }
    }
    componentDidMount=() =>{
        this.setState({ myname: localStorage.getItem('name') } )
        this.setState({myemail: localStorage.getItem('email')})
        this.setState({mypicture: localStorage.getItem('picture')})
        this.setState({token: localStorage.getItem('token')})

        axios.get('https://dog.ceo/api/breeds/image/random/16')
        .then(res=>{
            this.setState({imgs:res.data.message})
        })
    }
logout = ()=>{
    localStorage.clear()
}
    render() {
        return (
            <div>
                <NavBa myname={this.state.myname} mypicture={this.state.mypicture} logout={this.logout}/>
                <Popup></Popup>

                {/* ---------images---------- */}
                <div className="cards" style={{flexWrap:"wrap"}} >
                    {this.state.imgs.map((image,index)=>{
                        return <Post key={index} image={image} title={`The dog # ${index+1} on the list`}></Post>
                    })}
                </div>
            </div>
        )
    }
}
