import React, { Component } from 'react'

export default class Post extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            isPressed: false
        }
    }

    heartPressed = () =>
    {
        this.setState({
            isPressed: true
        })
    }

    render() {
        return (
                <div className="card">
                    <img className="img" alt="post" src={this.props.img} />
                    <div className="card-body">
                    <h2>{this.props.title}</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>

                {/* Like the post:*/}
                <img class= "heart" alt="Heart" 
                src ="https://upload.wikimedia.org/wikipedia/commons/7/70/Symbolic_Love_Heart.png"
                style={this.state.isPressed? {opacity:1} : {opacity:0.5} }
                onClick={this.heartPressed}
                />

            </div>
        )
    }
}
