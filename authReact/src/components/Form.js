import React from "react";

const Form = () => {
  return (
    <div>
      <label>{this.props.label}</label>
      <input type={this.props.type} />
    </div>
  )
}
export default Form