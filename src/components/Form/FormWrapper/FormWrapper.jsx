import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as FormLogo } from "../../../assets/formLogo.svg";
import "./form-wrapper.scss";

export function FormWrapper({ children }) {
  return (
    <div className="form-wrapper">
      <div className="form-wrapper__field">
        <figure className="form-wrapper__logo">
          <FormLogo />
          {children}
        </figure>
      </div>
    </div>
  );
}

FormWrapper.propTypes = {
  children: PropTypes.object,
};
