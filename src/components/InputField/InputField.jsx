import React, { useState } from "react";
import PropTypes from "prop-types";
import { validateInput } from "components/InputField/inputValidators";
import { LabelRed } from "components/Text/LabelRed/LabelRed";
import { ReactComponent as CrossIcon } from "assets/redCrossIcon.svg";
import "./input-field.scss";

const InputField = ({
  value,
  htmlFor,
  id,
  label,
  placeholder,
  validators,
  type,
  required,
  onChange,
  submitFail,
  submitFailMessage,
}) => {
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    onChange(value);
    if (submitFail === false || submitFail === undefined) {
      setError(validateInput(validators, value));
    }
  };

  return (
    <div className="input-wrap">
      {label && (
        <label htmlFor={htmlFor} className="input-label">
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        value={value}
        className={
          error || submitFail
            ? "input-wrap__field input-wrap__field--error"
            : "input-wrap__field"
        }
        placeholder={placeholder}
        required={required}
        onChange={handleChange}
      />
      {error && (
        <div className="input-error-cross">
          <LabelRed text={error.message} />
          <CrossIcon />
        </div>
      )}
      {submitFail && (
        <div className="input-error-cross">
          <LabelRed text={submitFailMessage} />
          <CrossIcon />
        </div>
      )}
    </div>
  );
};

InputField.propTypes = {
  value: PropTypes.string,
  htmlFor: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  validators: PropTypes.array,
  submitFailMessage: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
  submitFail: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

InputField.defaultProps = {
  value: "",
  label: "",
  placeholder: "",
  type: "text",
  validators: [],
  required: false,
};

export default InputField;
