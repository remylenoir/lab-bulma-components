import React, { Component } from "react";

class CoolButton extends Component {
  render() {
    let { className } = this.props;
    const { isSmall, isDanger, isSuccess } = this.props;
    const label = this.props.children;

    if (isSmall) className += "is-small ";
    if (isDanger) className += "is-danger ";
    if (isSuccess) className += "is-success ";

    const button = <button className={`button ${className}`}>{label}</button>;
    return button;
  }
}

export default CoolButton;
