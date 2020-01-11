import React, { FC } from "react";
import { User } from "domain/User";
import { ProfileCard } from "components/organisms/ProfileCard";
import { Flex, Box } from "components/atoms";

export const Profile: FC<{ user: User }> = ({ user }) => {
  return (
    <Box>
      <Box p={2}>Header</Box>
      <Flex>
        <Box m={2} w={1 / 3}>
          <ProfileCard onStatusChange={() => {}} user={user} />
        </Box>
        <Box m={2} flex={1}>
          Repositorie
        </Box>
      </Flex>
    </Box>
  );
};
