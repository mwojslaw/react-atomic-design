import React, { useState } from "react";
import { Box } from "components/atoms";
import { InputGroup } from "components/molecules";

export default {
  title: "Molecules"
};

export const inputGroup = () => {
  const [value, setValue] = useState("");
  return (
    <Box width="200px">
      <InputGroup
        value={value}
        onChange={setValue}
        buttonText={<span>&#8987;</span>}
      />
    </Box>
  );
};
