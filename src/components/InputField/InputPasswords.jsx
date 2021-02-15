import React, { Component } from "react";

import InputField from "components/InputField/InputField";
import { Validators } from "components/InputField/inputValidators";

export default class InputPasswords extends Component {
  state = {
    text: "",
    password: "",
    message: "",
  };

  handleChange = (key) => (value) => {
    this.setState({ [key]: value });
  };

  render() {
    const { pass, rpass } = this.state;

    return (
      <div className="input-passwords">
        <div className="input-pasword-1">
          <InputField
            label="password"
            value={pass}
            type="password"
            placeholder="8 characters with one letter or digit"
            validators={[
              { check: Validators.password, message: "password is not valid" },
            ]}
            onChange={this.handleChange("pass")}
          />
        </div>
        <div className="input-password-2">
          <InputField
            label="repeat password"
            value={rpass}
            type="password"
            placeholder="8 characters with one letter or digit"
            validators={[
              {
                check: Validators.passwordmatch,
                message: "passwords do not match",
              },
            ]}
            onChange={this.handleChange("rpass")}
          />
        </div>
      </div>
    );
  }
}
