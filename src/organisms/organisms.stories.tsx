import React from "react";
import { Avatar } from "organisms";
import Me from "assets/me.jpg";

export default {
  title: "Organisms"
};

export const avatar = () => (
  <Avatar
    status={{
      emoji: "sandglass",
      text: "Busy"
    }}
    width="250px"
    height="250px"
    src={Me}
  />
);
