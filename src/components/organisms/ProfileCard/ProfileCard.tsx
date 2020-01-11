import React, { FC } from "react";
import { Flex, Box } from "components/atoms";
import { Avatar } from "components/organisms";
import { User } from "domain/User";
import { Button } from "components/atoms";

export const ProfileCard: FC<{
  user: User;
  onStatusChange: (value: string) => void;
}> = ({ user, onStatusChange }) => (
  <Flex direction="column">
    <Avatar
      onStatusChange={onStatusChange}
      user={user}
      width="100%"
      height="250px"
    />
    <Box mt={3}>{user.name}</Box>
    <Box mt={3}>
      <Button>Edit profile</Button>
    </Box>
    <Box mt={3}>
      <div>{user.locaton}</div>
      <a href={`mailto:${user.email}`}>{user.email}</a>
    </Box>
  </Flex>
);
