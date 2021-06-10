import React, { Component } from 'react'

export default class Post extends Component {
    constructor(props){
        super(props)
        this.state={
            isPressed:false
        }
    }

    heartPressed =() => {
        this.setState({pressed: true});

    }
    render() {
        return (
            <div className="card">
               <img className="img" src={this.props.img}  alt="post"></img>
                 <div className="card-body">
                     <h2>{this.props.title}</h2>
                     <p>Lorem text</p>
                     </div> 
                     <img className= "heart" 
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9007n-20tXyLn_orqimJaiAuH1Xw8TA3OM51YWYnwawLLsv4eSYN22eUASaHASI9yUfw&usqp=CAU" 
                     style ={this.state.pressed? {opacity:1} : {opacity:0.5}} onClick={this.heartPressed} ></img>
     
                   
            </div>
        )
    }
}
