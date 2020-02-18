import React from "react";
import { Box } from "components/atoms";
import { InputGroup, DropDown, RepositoryItem } from "components/molecules";
import { action } from "@storybook/addon-actions";

export default {
  title: "Molecules"
};

export const inputGroup = () => (
  <Box width="200px">
    <InputGroup
      onChange={action("onChange")}
      buttonText={<span>&#8987;</span>}
    />
  </Box>
);

export const dropDown = () => (
  <Box width="200px">
    <DropDown
      options={[
        {
          label: "All",
          value: "all"
        },
        {
          label: "Public",
          value: "public"
        },
        {
          label: "Private",
          value: "private"
        }
      ]}
      onChange={action("onChange")}
      label="Type"
    />
  </Box>
);

export const repositoryItem = () => (
  <RepositoryItem
    item={{
      name: "react-atomic-design",
      description: "In search of PERFECT* design system for react",
      language: "typescript",
      type: "public"
    }}
  />
);
