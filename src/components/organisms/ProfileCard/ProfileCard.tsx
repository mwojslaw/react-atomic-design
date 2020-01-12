import React, { FC } from "react";
import { Flex, Box, Link, Text } from "components/atoms";
import { Avatar } from "components/organisms";
import { User } from "domain/User";
import { Button } from "components/atoms";
import { space, colors } from "theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const ProfileCard: FC<{
  user: User;
  onStatusChange: (value: string) => void;
}> = ({ user, onStatusChange }) => (
  <Flex flexDirection="column">
    <Avatar
      onStatusChange={onStatusChange}
      user={user}
      width="100%"
      height="300px"
    />
    <Box mt={space.l}>
      <Text fontSize={20} color={colors.grayDark}>
        {user.name}
      </Text>
    </Box>
    <Box mt={space.l}>
      <Button>Edit profile</Button>
    </Box>
    <Box mt={space.l}>
      <Flex>
        <FontAwesomeIcon
          fixedWidth={true}
          color={colors.grayDark}
          icon={faMapMarkerAlt}
        />
        <Text ml={space.s}>{user.locaton}</Text>
      </Flex>
      <Flex mt={space.s}>
        <FontAwesomeIcon
          fixedWidth={true}
          color={colors.grayDark}
          icon={faEnvelope}
        />
        <Link ml={space.s} href={`mailto:${user.email}`}>
          {user.email}
        </Link>
      </Flex>
    </Box>
  </Flex>
);
