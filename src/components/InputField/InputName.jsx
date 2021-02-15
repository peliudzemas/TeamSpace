import React, { Component } from "react";

import InputField from "components/InputField/InputField";
import { Validators } from "components/InputField/inputValidators";

export default class InputName extends Component {
  state = {
    text: "",
    message: "",
  };

  handleChange = (key) => (value) => {
    this.setState({ [key]: value });
  };

  render() {
    const { fname, lname } = this.state;

    return (
      <div className="input-names">
        <div className="input-name-1">
          <InputField
            label="first name"
            value={fname}
            type="text"
            placeholder="e.g. Leonardo, Leonardo-Wilhelm"
            validators={[
              { check: Validators.name, message: "this field is required" },
            ]}
            onChange={this.handleChange("fname")}
          />
        </div>
        <div className="input-name-2">
          <InputField
            label="last name"
            value={lname}
            type="text"
            placeholder="e.g. Caprio, Di-Caprio, DiCaprio"
            validators={[
              { check: Validators.name, message: "this field is required" },
            ]}
            onChange={this.handleChange("lname")}
          />
        </div>
      </div>
    );
  }
}
