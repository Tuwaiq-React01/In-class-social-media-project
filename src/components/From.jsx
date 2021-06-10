import React, { Component } from 'react'

export default class From extends Component {
    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <input type={this.props.type} />
            </div>
        )
    }
}
