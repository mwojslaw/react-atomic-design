import React, { FC, useContext } from "react";
import { User } from "domain/User";
import { RepositoryType, RepositoryLanguage } from "domain/Repository";
import {
  ProfileCard,
  RepositorySearchBar,
  WithAllOptionValue
} from "components/organisms";
import { Flex, Box, Tab, Badge } from "components/atoms";
import { space } from "theme";
import { useMediaQuery } from "react-responsive";
import { ThemeContext } from "styled-components";
import { Theme } from "theme";

type ProfileProps = {
  user: User;
  repositoryTypes: WithAllOptionValue<RepositoryType>[];
  repositoryType: WithAllOptionValue<RepositoryType>;
  repositoryLanguage: WithAllOptionValue<RepositoryLanguage>;
  repositoryLanguages: WithAllOptionValue<RepositoryLanguage>[];
};

export const Profile: FC<ProfileProps> = ({
  user,
  repositoryLanguages,
  repositoryTypes,
  repositoryType,
  repositoryLanguage
}) => {
  const theme = useContext<Theme>(ThemeContext);
  const minTablet = useMediaQuery({
    query: theme.mediaQueries.tablet
  });

  return (
    <Box>
      <Box p={space.m}>Header</Box>
      <Flex
        flexDirection={minTablet ? "row" : "column"}
        px={space.l}
        mt={space.xl}
      >
        <Box mr={{ phablet: space.l }} width={{ mobile: 1, tablet: 1 / 4 }}>
          <ProfileCard onStatusChange={() => {}} user={user} />
        </Box>
        <Box
          ml={{ phablet: space.l }}
          mt={{ mobile: space.l, phablet: 0 }}
          flex={1}
        >
          <Flex overflowX="auto" mb={space.l}>
            <Tab mr={space.s} disabled={true}>
              Overview
            </Tab>
            <Tab mr={space.s} selected={true}>
              <Badge placement="inline" content="10">
                Repositories
              </Badge>
            </Tab>
            <Tab mr={space.s}>
              <Badge placement="inline" content="0">
                Projects
              </Badge>
            </Tab>
            <Tab mr={space.s} disabled={true}>
              <Badge placement="inline" content="0">
                Packages
              </Badge>
            </Tab>
            <Tab mr={space.s} disabled={true}>
              <Badge placement="inline" content="1000">
                Stars
              </Badge>
            </Tab>
            <Tab mr={space.s} disabled={true}>
              <Badge placement="inline" content="80">
                Fallowers
              </Badge>
            </Tab>
            <Tab mr={space.s} disabled={true}>
              <Badge placement="inline" content="2">
                Fallowing
              </Badge>
            </Tab>
          </Flex>
          <RepositorySearchBar
            type={repositoryType}
            language={repositoryLanguage}
            types={repositoryTypes}
            languages={repositoryLanguages}
          />
        </Box>
      </Flex>
    </Box>
  );
};
