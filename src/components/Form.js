import React, { Component } from "react";

class Form extends Component {
    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <input type={this.props.type} />
            </div>
        );
    }
}

export default Form;