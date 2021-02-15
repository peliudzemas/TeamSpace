import React from "react";
import { text, boolean, withKnobs } from "@storybook/addon-knobs";
import { Button } from "../components/Button/Button";

export default {
  title: "Components / Button",
  component: Button,
  decorators: [withKnobs],
};

export const ButtonEnabled = () => {
  const disabled = boolean("Disabled", false);

  return (
    <>
      <Button
        className={
          disabled ? "button button--disabled" : "button button--enabled"
        }
      >
        {text("Label 1", "register")}
      </Button>
      <Button className="button button--slider">
        {text("Label 2", "see more")}
      </Button>
    </>
  );
};
