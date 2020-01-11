import React, { useState } from "react";
import { InputGroup } from "molecules";

export default {
  title: "Molecules"
};

export const inputGroup = () => {
  const [value, setValue] = useState("");
  return (
    <InputGroup
      value={value}
      onChange={setValue}
      buttonText={<span>&#8987;</span>}
    />
  );
};
