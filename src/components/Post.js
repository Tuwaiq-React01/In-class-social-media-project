import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

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

            <div className="card" style={{ width: 18 + 'rem' }}>
                <img className="img" src={this.props.img} height="200px" />
                <div className="card-body">
                    <h2>{this.props.title}</h2>
                    <p>jfkfdkldlkfdjkfdklljfdljlk</p>
                </div>
                <img
                    className="heart" width="100px"
                    alt="heart"
                    src="https://icons-for-free.com/iconfiles/png/512/instagram+like+notification+icon-1320184017391732020.png"
                    style={this.state.isPressed ? { opacity: 1 } : { opacity: 0.5 }}
                    onClick={this.heartPressed} />
            </div>
        )
    }
}
