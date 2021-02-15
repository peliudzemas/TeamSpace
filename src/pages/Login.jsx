import React from "react";
import { Route, Switch } from "react-router-dom";
import { FormWrapper } from "../components/Form/FormWrapper/FormWrapper.jsx";
import { LoginForm } from "../components/Form/LoginForm/LoginForm";
import Layout from "../components/mainLayout/Layout.jsx";
import { Register } from "./Register.jsx";

export function Login() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <FormWrapper>
            <LoginForm />
          </FormWrapper>
        )}
      />
      <Route exact path="/register" render={() => <Register />} />
      <Layout />
    </Switch>
  );
}
