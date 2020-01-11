import React from "react";
import { addDecorator } from "@storybook/react";
import { getTheme } from "../src/theme";
import { ThemeProvider } from "styled-components";

addDecorator(storyFn => (
  <ThemeProvider theme={getTheme("light")}>{storyFn()}</ThemeProvider>
));
