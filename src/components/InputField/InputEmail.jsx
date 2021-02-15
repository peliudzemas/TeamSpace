import React, { Component } from "react";

import InputField from "components/InputField/InputField";
import { Validators } from "components/InputField/inputValidators";

export default class InputEmail extends Component {
  state = {
    text: "",
    email: "",
    message: "",
  };

  handleChange = (key) => (value) => {
    this.setState({ [key]: value });
  };

  render() {
    const { email } = this.state;

    return (
      <div className="input-email">
        <InputField
          label="email"
          value={email}
          type="email"
          placeholder="Valid email address"
          validators={[
            { check: Validators.email, message: "email is not valid" },
          ]}
          onChange={this.handleChange("email")}
        />
      </div>
    );
  }
}
