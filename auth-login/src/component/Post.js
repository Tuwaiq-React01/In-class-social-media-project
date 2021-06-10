import React, { Component } from 'react'

export default class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isPressed: false
        }
    }

    heartPressed = () => {
        this.setState({ isPressed: true })
    }
    render() {
        return (
            <div>
                <div className="card">
                    <img src={this.props.img} alt="Post" />
                    <div className="card-body">
                        <h2>{this.props.title}</h2>
                        <p>Text</p>
                    </div>
                    <img
                        className="heart"
                        src="https://upload.wikimedia.org/wikipedia/commons/7/70/Symbolic_Love_Heart.png"
                        style={this.state.isPressed ? { opacity: 1 } : { opacity: 0.5 }}
                        onClick={this.heartPressed} />
                </div>
            </div>
        )
    }
}
