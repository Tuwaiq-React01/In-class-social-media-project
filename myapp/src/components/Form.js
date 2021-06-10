import React, { Component } from 'react'

export default class Form extends Component {
    render() {
        return (
            <div>
                <lable>{this.props.text}</lable>
                <input type={this.props.type}></input>
            </div>
        )
    }
}