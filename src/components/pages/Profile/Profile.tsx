import React, { FC } from "react";
import { User } from "domain/User";
import { ProfileCard } from "components/organisms/ProfileCard";
import { Flex, Box } from "components/atoms";
import { space } from "theme";

export const Profile: FC<{ user: User }> = ({ user }) => {
  return (
    <Box>
      <Box p={space.m}>Header</Box>
      <Flex>
        <Box m={space.m} width={1 / 3}>
          <ProfileCard onStatusChange={() => {}} user={user} />
        </Box>
        <Box m={space.m} flex={1}>
          Repositories
        </Box>
      </Flex>
    </Box>
  );
};
