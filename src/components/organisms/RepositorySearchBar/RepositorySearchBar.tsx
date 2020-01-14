import React, { FC, useContext } from "react";
import { Flex, Box, Input, Button } from "components/atoms";
import { DropDown, Option } from "components/molecules";
import { ThemeContext } from "styled-components";
import { RepositoryType, RepositoryLanguage } from "domain/Repository";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

export type WithAllOptionValue<T> = T | "*";

type RepositorySearchBarProps<T, L> = {
  types: WithAllOptionValue<T>[];
  type: WithAllOptionValue<T>;
  languages: WithAllOptionValue<L>[];
  language: WithAllOptionValue<L>;
  onChangeType?: (type: WithAllOptionValue<T>) => void;
  onChangeLanguage?: (language: WithAllOptionValue<L>) => void;
};

const optionPerRepositoryType: Record<
  WithAllOptionValue<RepositoryType>,
  Option<WithAllOptionValue<RepositoryType>>
> = {
  private: {
    value: "private",
    label: "Private"
  },
  public: {
    value: "public",
    label: "Public"
  },
  ["*"]: {
    value: "*",
    label: "All"
  }
};

const optionPerRepositoryLanguage: Record<
  WithAllOptionValue<RepositoryLanguage>,
  Option<WithAllOptionValue<RepositoryLanguage>>
> = {
  javascript: {
    value: "javascript",
    label: "Javascript"
  },
  typescript: {
    value: "typescript",
    label: "Typescript"
  },
  ["*"]: {
    value: "*",
    label: "All"
  }
};

export const RepositorySearchBar: FC<RepositorySearchBarProps<
  RepositoryType,
  RepositoryLanguage
>> = ({ types, type, language, languages, onChangeLanguage, onChangeType }) => {
  const { space, mediaQueries } = useContext(ThemeContext);
  const minTablet = useMediaQuery({
    query: mediaQueries.tablet
  });

  return (
    <Flex flexDirection={minTablet ? "row" : "column"}>
      <Box mr={space.l} width={{ mobile: 1, tablet: 1 / 2 }}>
        <Input placeholder="Find a repository..." />
      </Box>
      <Flex mt={{ mobile: space.m, tablet: 0 }} flex={1}>
        <Box mr={space.s}>
          <DropDown
            label="Type"
            value={type}
            onChange={onChangeType}
            options={types.map(type => optionPerRepositoryType[type])}
          />
        </Box>
        <Box mr={space.l}>
          <DropDown
            label="Language"
            value={language}
            onChange={onChangeLanguage}
            options={languages.map(lang => optionPerRepositoryLanguage[lang])}
          />
        </Box>
        <Box>
          <Button variant="primary">
            <FontAwesomeIcon fixedWidth={true} icon={faBook} />
            New
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};
