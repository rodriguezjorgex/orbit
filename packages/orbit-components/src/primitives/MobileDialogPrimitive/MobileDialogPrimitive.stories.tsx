import * as React from "react";
import { text, boolean, number } from "@storybook/addon-knobs";

import Button from "../../Button";

import TooltipPrimitive from ".";

export default {
  title: "MobileDialogPrimitive",
};

export const Playground = () => {
  const content = text("content", "Write your text here.");
  const dataTest = text("dataTest", "test");
  const tabIndex = number("TabIndex", 0);
  const enabled = boolean("enabled", true);
  const stopPropagation = boolean("enabled", true);
  const removeUnderlinedText = boolean("removeUnderlinedText", false);
  const labelClose = text("labelClose", "Close");

  return (
    <TooltipPrimitive
      content={content}
      dataTest={dataTest}
      tabIndex={tabIndex}
      labelClose={labelClose}
      enabled={enabled}
      stopPropagation={stopPropagation}
      removeUnderlinedText={removeUnderlinedText}
    >
      <Button>Open Mobile Dialog</Button>
    </TooltipPrimitive>
  );
};

Playground.story = {
  parameters: {
    loki: { skip: true },
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};
