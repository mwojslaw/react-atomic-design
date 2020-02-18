import React from "react";
import { Profile } from "components/pages";
import Me from "assets/me.jpg";
import { User } from "domain/User";

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

export default {
  title: "Pages"
};

export const profile = () => (
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
);
