import React, { FC, useState } from "react";
import { User } from "domain/User";
import {
  RepositoryType,
  RepositoryLanguage,
  Repository
} from "domain/Repository";
import {
  ProfileCard,
  RepositorySearchBar,
  WithAllOptionValue,
  RepositoryItems
} from "components/organisms";
import { Flex, Box, Tab, Badge } from "components/atoms";
import { space } from "theme";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "hooks";

type ProfileProps = {
  user: User;
  repositories: Repository[];
  repositoryTypes: WithAllOptionValue<RepositoryType>[];
  repositoryLanguages: WithAllOptionValue<RepositoryLanguage>[];
};

export const Profile: FC<ProfileProps> = ({
  user,
  repositoryLanguages,
  repositories,
  repositoryTypes
}) => {
  const theme = useTheme();

  const [repositoryType, setRepositoryType] = useState<
    WithAllOptionValue<RepositoryType>
  >("*");

  const [repositoryLanguage, setRepositoryLanguage] = useState<
    WithAllOptionValue<RepositoryLanguage>
  >("*");

  const [searchText, setSearchText] = useState("");

  const minTablet = useMediaQuery({
    query: theme.mediaQueries.tablet
  });

  const repositoriesWithFilters = repositories.filter(
    repository =>
      (repositoryType === "*" || repository.type === repositoryType) &&
      (repositoryLanguage === "*" ||
        repository.language === repositoryLanguage) &&
      (searchText === "" || repository.name.includes(searchText))
  );

  const onClearFilters = (): void => {
    setSearchText("");
    setRepositoryType("*");
    setRepositoryLanguage("*");
  };

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
            searchText={searchText}
            type={repositoryType}
            language={repositoryLanguage}
            types={repositoryTypes}
            languages={repositoryLanguages}
            onChangeLanguage={setRepositoryLanguage}
            onChangeType={setRepositoryType}
            onChangeText={setSearchText}
          />
          <RepositoryItems
            onClearFilters={onClearFilters}
            language={repositoryLanguage}
            type={repositoryType}
            searchText={searchText}
            items={repositoriesWithFilters}
          />
        </Box>
      </Flex>
    </Box>
  );
};
