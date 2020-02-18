import React, { FC } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "theme";
import { normalize } from "styled-normalize";
import { Profile } from "components/pages";
import { User } from "domain/User";
import Me from "assets/me.jpg";

const user: User = {
  name: "mwojslaw",
  email: "maciej@gmail.com",
  locaton: "Kraków",
  avatarSrc: Me,
  status: {
    text: "Busy",
    emoji: "sandglass"
  }
};

export const GlobalStyle = createGlobalStyle`
  ${normalize}
`;

export const App: FC<{}> = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <Profile
        repositories={[
          {
            name: "react-atomic-design",
            description: "In search of PERFECT* design system for react",
            language: "typescript",
            type: "public"
          },
          {
            name: "react-cqrs",
            description: "",
            language: "javascript",
            type: "public"
          }
        ]}
        repositoryLanguages={["*", "javascript", "typescript"]}
        repositoryTypes={["*", "public", "private"]}
        user={user}
      />
    </>
  </ThemeProvider>
);
