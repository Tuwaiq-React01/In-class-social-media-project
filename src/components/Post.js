import React, { Component } from 'react'

export default class Post extends Component {
    constructor(props){
        super(props)
        this.state={
        isPressed:false
        }
    }

heartPressed = () => {
this.setState({isPressed:true})

    }

    render() {
        return (
            <div className="card">
                <img className="img" src={this.props.img} alt="post"/>
                <div className="card-body">
                <h2>{this.props.title}</h2>
                <p>Sint incididunt qui anim reprehenderit ullamco reprehenderit duis magna. Cillum minim qui nostrud aliqua amet nulla qui in sunt velit. Exercitation anim quis in et ex aliquip adipisicing eu aliquip id irure commodo. Labore amet reprehenderit aute ex laborum do reprehenderit occaecat nisi nostrud nostrud reprehenderit ipsum. Exercitation laborum consequat occaecat do et cillum esse.</p>

            </div>
            <img className="heart" alt="heart" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/240px-Heart_coraz%C3%B3n.svg.png" style={this.state.isPressed?{opacity:1}: {opacity:0.5}} 
            onClick={this.heartPressed}></img>
           </div>

        )
    }
}
