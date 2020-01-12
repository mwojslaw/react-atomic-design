import React, { FC } from "react";
import { Card, Box } from "components/atoms";
import { InputGroup } from "components/molecules";
import { User, UserStatusEmojiType } from "domain/User";
import styled from "styled-components";
import { space } from "theme";

const AvatarImg = styled.div<{ src: string }>`
  background-image: url(${({ src }) => src});
  height: 100%;
  background-position: center;
  background-size: cover;
`;

const getEmojiForType = (emojiType: UserStatusEmojiType) => {
  switch (emojiType) {
    case "sandglass":
      return <span>&#8987;</span>;
  }
};

export const Avatar: FC<{
  user: User;
  width: string;
  height: string;
  onStatusChange?: (value: string) => void;
}> = ({ user, width, height, onStatusChange }) => (
  <Card width={width} height={height}>
    <AvatarImg src={user.avatarSrc} />
    <Box p={space.s}>
      <InputGroup
        onChange={onStatusChange}
        value={user.status.text}
        buttonText={getEmojiForType(user.status.emoji)}
      />
    </Box>
  </Card>
);
