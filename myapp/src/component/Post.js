import React, { Component } from 'react'

export default class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pressed: false
        }
    }
    heartPressed = () => {
        this.setState({ pressed: true })
    }
    render() {
        return (
            <center>
                <div className="card">
                    <img className="card-image" src={this.props.img} />
                    <div className="card-body">
                        <h1>{this.props.title}</h1>
                        <p>loren ....</p>
                    </div>
                    <img className="heart" src="https://purepng.com/public/uploads/large/heart-icon-y1k.png"
                        onClick={this.heartPressed} style={this.state.pressed ? { opacity: 1 } : { opacity: 0.5 }} />
                </div>
            </center>
        )
    }
}
