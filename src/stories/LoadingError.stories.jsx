import React from "react";
import { text, withKnobs } from "@storybook/addon-knobs";
import { LoadingError } from "../components/LoadingError/LoadingError";

export default {
  title: "Components / LoadingError",
  component: LoadingError,
  decorators: [withKnobs],
};

export const LoadingErrorStory = () => {
  return (
    <LoadingError
      message={text("Error message", "Error. Unable to connect to the server.")}
    ></LoadingError>
  );
};
