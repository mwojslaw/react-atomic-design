import React, { FC, ReactNode } from "react";
import { Input as InputBase, Flex, Button } from "atoms";
import styled from "styled-components";

const Input = styled(InputBase)`
  border-left: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

export const InputGroup: FC<{
  buttonText: ReactNode;
  value: string;
  onChange: (value: string) => void;
}> = ({ buttonText, value, onChange }) => (
  <Flex>
    <Button>{buttonText}</Button>
    <Input onChange={e => onChange(e.target.value)} value={value} />
  </Flex>
);
