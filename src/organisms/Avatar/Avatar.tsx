import React, { FC } from "react";
import { Card, Box } from "atoms";
import { Status, StatusProps } from "molecules";
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
  status: StatusProps;
}> = ({ src, width, height, status }) => (
  <Card w={width} h={height}>
    <AvatarImg src={src} />
    <Box p={1}>
      <Status emoji={status.emoji} text={status.text} />
    </Box>
  </Card>
);
