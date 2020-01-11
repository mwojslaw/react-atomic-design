import React, { useState } from "react";
import { InputGroup } from "components/molecules";

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
