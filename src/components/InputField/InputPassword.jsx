import React, { Component } from "react";

import InputField from "components/InputField/InputField";
import { Validators } from "components/InputField/inputValidators";

export default class InputPassword extends Component {
  state = {
    text: "",
    password: "",
    message: "",
  };

  handleChange = (key) => (value) => {
    this.setState({ [key]: value });
  };

  render() {
    const { pass } = this.state;

    return (
      <div className="input-password">
        <InputField
          label="password"
          value={pass}
          type="password"
          placeholder="At least 8 characters with one letter or digit"
          validators={[
            { check: Validators.password, message: "password is not valid" },
          ]}
          onChange={this.handleChange("pass")}
        />
      </div>
    );
  }
}
