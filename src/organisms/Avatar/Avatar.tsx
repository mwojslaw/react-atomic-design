import React, { FC, ReactNode } from "react";
import { Card, Box } from "atoms";
import { InputGroup } from "molecules";
import styled from "styled-components";

const AvatarImg = styled.div<{ src: string }>`
  background-image: url(${({ src }) => src});
  height: 100%;
  background-position: center;
  background-size: cover;
`;

export const Avatar: FC<{
  src: string;
  width: string;
  height: string;
  status: {
    text: string;
    emoji: ReactNode;
    onChange?: (value: string) => void;
  };
}> = ({ src, width, height, status }) => (
  <Card w={width} h={height}>
    <AvatarImg src={src} />
    <Box p={1}>
      <InputGroup
        onChange={status.onChange}
        value={status.text}
        buttonText={status.emoji}
      />
    </Box>
  </Card>
);
