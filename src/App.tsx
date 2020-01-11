import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { getTheme } from "theme";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
`;

export const App = () => (
  <ThemeProvider theme={getTheme("light")}>
    <>
      <GlobalStyle />
    </>
  </ThemeProvider>
);
