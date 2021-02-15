import React from "react";
import { Redirect } from "react-router-dom";
import FormContainer from "../FormContainer/FormContainer";
import InputField from "../../InputField/InputField";
import { Validators } from "../../InputField/inputValidators";
import "../../Form/RegistrationForm/registration-form.scss";
import Modal from "components/Modal/Modal";
import { Button } from "components/Button/Button";

export class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
      rpass: "",
      text: "",
      message: "",
      redirect: false,
      isOpen: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange = (key) => (value) => {
    this.setState({ [key]: value });
  };

  handleClick = (key, value) => {
    this.setState({ [key]: value });
  };

  submit = () => {
    if (
      !Validators.name(this.state.fname) &&
      !Validators.name(this.state.lname) &&
      !Validators.email(this.state.email) &&
      !Validators.password(this.state.pass) &&
      !Validators.passwordmatch(this.state.rpass)
    ) {
      this.setState({
        isOpen: true,
      });
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <>
        <FormContainer
          legend="Register"
          sublegend="Let&rsquo;s get you on board"
          buttonText="register"
          smallText="Already have an account?"
          path="/"
          linkText="Sign in"
          submit={this.submit}
        >
          <InputField
            label="first name"
            htmlFor="first name"
            id="first name"
            value={this.state.fname}
            type="text"
            placeholder="e.g. Mike, Mike-Wilhelm"
            validators={[
              { check: Validators.name, message: "this field is required" },
            ]}
            required={true}
            onChange={this.handleChange("fname")}
          />
          <InputField
            label="last name"
            htmlFor="last name"
            id="last name"
            value={this.state.lname}
            type="text"
            placeholder="e.g. Caprio, DiCaprio"
            validators={[
              { check: Validators.name, message: "this field is required" },
            ]}
            required={true}
            onChange={this.handleChange("lname")}
          />
          <InputField
            label="email"
            htmlFor="email"
            id="email"
            value={this.state.email}
            type="email"
            placeholder="Valid email address"
            validators={[
              { check: Validators.email, message: "email is not valid" },
            ]}
            required={true}
            onChange={this.handleChange("email")}
          />
          <InputField
            label="password"
            htmlFor="password"
            id="password"
            value={this.state.pass}
            type="password"
            placeholder="At least 8 characters"
            validators={[
              {
                check: Validators.password,
                message: "password is not valid",
              },
            ]}
            required={true}
            onChange={this.handleChange("pass")}
          />
          <InputField
            label="repeat password"
            htmlFor="repeat password"
            id="repeat password"
            value={this.state.rpass}
            type="password"
            placeholder="At least 8 characters"
            validators={[
              {
                check: Validators.passwordmatch,
                message: "passwords do not match",
              },
            ]}
            required={true}
            onChange={this.handleChange("rpass")}
          />
        </FormContainer>
        <Modal
          open={this.state.isOpen}
          heading={"Registration successful"}
          onClose={() => this.handleClick("isOpen", this.isOpen)}
        >
          <div className="modal__content">
            You can now log in and start exploring!
          </div>
          <div className="modal__button">
            <Button
              className="button button--enabled"
              type="button"
              handleClick={() => this.handleClick("redirect", true)}
            >
              Log in
            </Button>
          </div>
        </Modal>
      </>
    );
  }
}
