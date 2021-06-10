import React, { Component } from 'react'
export default class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isPressed: false
        }
    }
    heartPressed = () => {
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
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <img class="heart" alt="Heart"
                    src="https://upload.wikimedia.org/wikipedia/commons/7/70/Symbolic_Love_Heart.png"
                    style={this.state.isPressed ? { opacity: 1 } : { opacity: 0.5 }}
                    onClick={this.heartPressed}
                />
            </div>
        )
    }
}