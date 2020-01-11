import React, { useState } from "react";
import { Avatar } from "organisms";
import Me from "assets/me.jpg";

export default {
  title: "Organisms"
};

export const avatar = () => {
  const [value, setValue] = useState("");

  return (
    <Avatar
      status={{
        emoji: <span>&#8987;</span>,
        text: value,
        onChange: setValue
      }}
      width="250px"
      height="250px"
      src={Me}
    />
  );
};
