import React, { Component } from "react";

class FormField extends Component {
  render() {
    const { label, type, placeholder } = this.props;

    const formCode = (
      <div className="field">
        <label className={label}>Name</label>
        <div className="control">
          <input className="input" type={type} placeholder={placeholder} />
        </div>
      </div>
    );
    return formCode;
  }
}

export default FormField;
