import React, { FC } from "react";
import { Flex, Box, Link, Text, Card, Button, Avatar } from "components/atoms";
import { InputGroup } from "components/molecules";
import { User, UserStatusEmojiType } from "domain/User";
import { colors, Spacing, ThemeColors } from "theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "hooks";

const getEmojiForType = (emojiType: UserStatusEmojiType) => {
  switch (emojiType) {
    case "sandglass":
      return <span>&#8987;</span>;
  }
};

const BasicInformation: FC<{
  user: User;
  space: Spacing;
  colors: ThemeColors;
}> = ({ user, space, colors }) => (
  <Box>
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
);

export const ProfileCard: FC<{
  user: User;
  onStatusChange: (value: string) => void;
}> = ({ user, onStatusChange }) => {
  const { space, mediaQueries } = useTheme();
  const minTablet = useMediaQuery({
    query: mediaQueries.tablet
  });

  return (
    <Box>
      <Flex flexDirection={minTablet ? "column" : "row"}>
        <Box
          mr={{ mobile: space.m, tablet: 0 }}
          width={{ mobile: 1 / 3, tablet: 1 }}
        >
          <Card width="100%" height={minTablet ? "300px" : "100px"}>
            <Avatar src={user.avatarSrc} />
            {minTablet && (
              <Box p={space.s}>
                <InputGroup
                  onChange={onStatusChange}
                  value={user.status.text}
                  buttonText={getEmojiForType(user.status.emoji)}
                />
              </Box>
            )}
          </Card>
        </Box>
        <Box flex={1} mt={{ phablet: space.l }}>
          <Box>
            <Text fontSize={20} color={colors.grayDark}>
              {user.name}
            </Text>
          </Box>
          <Box mt={{ mobile: space.s, phablet: space.l }}>
            {!minTablet ? (
              <InputGroup
                onChange={onStatusChange}
                value={user.status.text}
                buttonText={getEmojiForType(user.status.emoji)}
              />
            ) : (
              <Button>Edit profile</Button>
            )}
          </Box>
          {minTablet && (
            <Box mt={space.l}>
              <BasicInformation user={user} space={space} colors={colors} />
            </Box>
          )}
        </Box>
      </Flex>
      {!minTablet && (
        <Box mt={space.l}>
          <BasicInformation user={user} space={space} colors={colors} />
        </Box>
      )}
    </Box>
  );
};
