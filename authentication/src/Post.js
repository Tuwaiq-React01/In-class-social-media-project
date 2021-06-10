import React, { Component } from 'react'
import './Post.css'
export default class Post extends Component {
    constructor(props){
        super(props)
        this.state={
            isPressed:false
        }
    }
    heartPressed=()=>{
        this.setState({isPressed: true});
    }
    render() {
        return (
            <div>
                <div className="card">
                    <img className="img" src={this.props.src} alt={this.props.title} />
                    <div className="card-body">
                        <h5>{this.props.title}</h5>
                        <p >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <img className="heart"
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
                     style={this.state.isPressed?{opacity:1}:{opacity:0.5}}
                     onClick={this.heartPressed}
                     height="150px"
                     />
                </div>
            </div>
        )
    }
}