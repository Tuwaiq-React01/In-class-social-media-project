import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state={
            input:""
        }
    }
    render() {
        return (
            <div>
                <label>{this.props.label}</label>
                <input type={this.props.type}/>

            </div>
        );
    }
}

export default Form;