import React, { Component } from "react";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPressed: false,
    };
  }

  imageClick = () => {
    this.setState({ isPressed: !this.state.isPressed });
  };

  render() {
    return (
      <div>
        <div>
          <h1>{this.props.title} </h1>

          <img src={this.props.src} alt="dog pic" width="250px" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
            sit, id impedit iste similique doloribus veritatis pariatur
            quisquam? Ipsum amet nulla repellendus repellat. Nesciunt itaque at
            nostrum totam veniam. Dolor.
          </p>
        </div>

        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/70/Symbolic_Love_Heart.png"
            alt="heart"
            width="25px"
            style={this.state.isPressed ? { opacity: 1 } : { opacity: 0.3 }}
            onClick={this.imageClick}
          />
        </div>

        <br />
        <hr />
      </div>
    );
  }
}
