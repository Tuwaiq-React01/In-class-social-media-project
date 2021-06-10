import React, { Component } from 'react'

export default class Post extends Component {
    constructor(probs){
        super(probs);
        this.state = {
          pressed: false
        }
      }

      heartPressed = () => {
          this.setState({pressed: true})
      }

    render() {
        return (
            <div>
                <div className="card">
                <img className="img" src={this.props.img}></img>
                <div className="card-body">
                    <h2>{this.props.title}</h2>
                    <p>adorable, cute, lovable, smoll, lovely, adjkehjd</p>
                </div>
                <img className="heart" alt="heart" src="https://pngimg.com/uploads/heart/heart_PNG51349.png"
                style={this.state.pressed? {opacity: 1}: {opacity: 0.5}} onClick={this.heartPressed}></img>
                </div>
            </div>
        )
    }
}
