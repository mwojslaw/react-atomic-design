import React, { FC, ReactNode } from "react";
import {
  Input as InputBase,
  Flex,
  Box,
  Button as ButtonBase
} from "components/atoms";
import styled from "styled-components";

const Input = styled(InputBase)`
  border-left: none;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

const Button = styled(ButtonBase)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export const InputGroup: FC<{
  buttonText: ReactNode;
  value: string;
  onChange: (value: string) => void;
}> = ({ buttonText, value, onChange }) => (
  <Flex>
    <Box width={1 / 5}>
      <Button>{buttonText}</Button>
    </Box>
    <Input onChange={e => onChange(e.target.value)} value={value} />
  </Flex>
);
