import React, { Component } from 'react'

export default class Post extends Component {
    constructor(props){
        super(props)
        this.state = {
         isPressed: false
        }
    }
    heartPressed = () => {
        this.setState({isPressed:true})
    }
    render() {
        return (
            <div>
                <div className = "card">
                <img className = "img" src = {this.props.img} alt="Post" />
                <div className = "card-body">
                    <h2>{this.props.title}</h2>
                    <p> leorm ispsum </p>
             
            </div>  
            </div> 

            <img
            className="heart"
            alt = "heart"
            src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_corazón.svg/1200px-Heart_corazón.svg.png"
            style={this.state.isPressed? {opacity:1} : {opacity:0.5} }
            onClick={this.heartPressed} />
             
 </div>
           
        )} }


