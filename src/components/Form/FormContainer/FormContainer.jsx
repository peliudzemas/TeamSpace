import React from "react";
import PropTypes from "prop-types";
import { Button } from "../../Button/Button";
import "./form-container.scss";

const FormContainer = (props) => {
  const {
    legend,
    sublegend,
    buttonText,
    smallText,
    path,
    linkText,
    submit,
    children,
  } = props;

  function handleSubmit(event) {
    event.preventDefault();
    submit();
  }

  return (
    <React.Fragment>
      <form className="form-container" onSubmit={handleSubmit}>
        <h2 className="form-container__legend">{legend}</h2>
        <p className="form-container__sublegend">{sublegend}</p>
        <div className="form-container__form-grid">{children}</div>
        <footer className="form-container__footer">
          <Button className="button button--enabled" typeName="submit">
            {buttonText}
          </Button>
          <small className="form-container__footer-text">
            {smallText}
            <a className="form-container__sign-link" href={path}>
              {linkText}
            </a>
          </small>
        </footer>
      </form>
    </React.Fragment>
  );
};

export default FormContainer;

FormContainer.propTypes = {
  legend: PropTypes.string,
  sublegend: PropTypes.string,
  buttonText: PropTypes.string,
  smallText: PropTypes.string,
  path: PropTypes.string,
  linkText: PropTypes.string,
  children: PropTypes.array,
  submit: PropTypes.func,
};
