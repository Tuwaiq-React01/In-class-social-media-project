import React, { Component } from 'react'

export default class Post extends Component {
    constructor(props){
    super(props);
    this.state={
        isPresed: false
    }
    }
    heartPressed= ()=> {
    this.setState({isPresed: true})
    }
    render() {
        return (
      <div className="card">
        <img  src={this.props.img} />
        <div className="card-body">
            <h2>{this.props.title}</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's
                 standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make </p>
        </div>
        <img className="heart" alt="heart" src="data:image/png;base64,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"
        style={this.state.isPresed ? {opacity:1}: {opacity:0.5}}
        onClick={this.heartPressed}
        />
            </div>
        )
    }
}
