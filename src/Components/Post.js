import React, { Component } from 'react'
import '../index.css'
export default class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isPressed: false
        }
    }
    heartPressesd = () => {
        this.setState({ isPressed: !this.state.isPressed })
    }
    render() {
        return (
            <div className="card">
                <h2>{this.props.title}</h2>
                <img src={this.props.img} alt="dog" className="img" />
                <div className="card-body">

                    <p>This is a picture of a dog.</p>
                    <img className="heart"
                        alt="heart"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
                        style={this.state.isPressed ? { opacity: 1 } : { opacity: 0.5 }}
                        onClick={this.heartPressesd}
                    />
                </div>
            </div>
        )
    }
}
