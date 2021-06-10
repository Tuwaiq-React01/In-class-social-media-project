import React, { Component } from "react";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPressed: false,
        };
    }

    heartPressed = () => {
        this.setState({ isPressed: !this.state.isPressed });
    };
    
    render() {
        return (
            <div className="card">
                <img className="img" src={this.props.img} />
                <div className="card-body">
                    <h2>{this.props.title}</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <img
                className="heart"
                alt="heart"
                src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Heart_coraz%C3%B3n.svg"
                onClick={() => this.heartPressed()}
                style={this.state.isPressed ? { opacity: 1 } : { opacity: 0.3 }}
                />
            </div>
        );
    }
}

export default Post;
