import React, { Component } from "react";

export default class Post extends Component {
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
          <p>
            adskughskjalfhsdkfjhdslfdskjhflajkhflskdjha dlkjfdslh hlskf hlsd
          </p>
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
