import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import ClockComponent from "../components/Clock/Clock";

export default {
  title: "Components / Clock",
  decorators: [withKnobs],
};

export const Clock = () => {
  return <ClockComponent />;
};
