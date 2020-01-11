import React from "react";
import { ThemeProvider } from "styled-components";
import { Profile } from "pages";
import { getTheme } from "theme";

export const App = () => (
  <ThemeProvider theme={getTheme("light")}>
    <Profile />
  </ThemeProvider>
);
