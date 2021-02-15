import React from "react";
import InputName from "../components/InputField/InputName";
import InputPassword from "../components/InputField/InputPassword";
import InputPasswords from "../components/InputField/InputPasswords";
import InputEmail from "../components/InputField/InputEmail";

export default {
  title: "Components / InputField",
};

export const Name = () => {
  return <InputName />;
};

export const Password = () => {
  return <InputPassword />;
};

export const Passwords = () => {
  return <InputPasswords />;
};

export const Email = () => {
  return <InputEmail />;
};
