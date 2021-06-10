import React, { Component } from 'react'

export default class Post extends Component {
    constructor(props){
        super(props)
        this.state = {
            isPressed: false
        }
    }

    imageClick = () => {
        this.setState({isPressed: !this.state.isPressed})
    }

    render() {
        {console.log("I'm the Post")}
        return (    
            
//   <img class="card-img-top" src="..." alt="Card image cap">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>       
            <div class="card" style={{width: "18rem"}}>
                <img class="card-img-top" src={this.props.img}></img>
                <div class="card-body">
                <h5 class="card-title">{this.props.title}</h5>
                <p class="card-text">This is a dog</p>
                <p>The rendering component is {this.props.render}</p>
                </div>
                <img className="heart" src="https://upload.wikimedia.org/wikipedia/commons/7/70/Symbolic_Love_Heart.png" style={this.state.isPressed? {opacity:1}:{opacity:0.5}} onClick={this.imageClick} width="50" height="50">
                </img>
            </div>
        )
    }
}
