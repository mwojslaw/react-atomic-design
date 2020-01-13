import React, { FC } from "react";
import { User } from "domain/User";
import { ProfileCard } from "components/organisms/ProfileCard";
import { Flex, Box } from "components/atoms";
import { space } from "theme";

export const Profile: FC<{ user: User }> = ({ user }) => {
  return (
    <Box>
      <Box p={space.m}>Header</Box>
      <Flex px={space.l} mt={space.xl}>
        <Box mr={space.l} width={1 / 4}>
          <ProfileCard onStatusChange={() => {}} user={user} />
        </Box>
        <Box m={space.m} flex={1}>
          Repositories
        </Box>
      </Flex>
    </Box>
  );
};
