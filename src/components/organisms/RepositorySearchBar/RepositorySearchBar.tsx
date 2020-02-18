import React, { FC } from "react";
import { Flex, Box, Input, Button } from "components/atoms";
import { DropDown, Option } from "components/molecules";
import { RepositoryType, RepositoryLanguage } from "domain/Repository";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import { useTheme } from "hooks";

export type WithAllOptionValue<T> = T | "*";

type RepositorySearchBarProps<T, L> = {
  types: WithAllOptionValue<T>[];
  type: WithAllOptionValue<T>;
  languages: WithAllOptionValue<L>[];
  language: WithAllOptionValue<L>;
  searchText?: string;
  onChangeType?: (type: WithAllOptionValue<T>) => void;
  onChangeLanguage?: (language: WithAllOptionValue<L>) => void;
  onChangeText?: (text: string) => void;
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
>> = ({
  types,
  type,
  language,
  languages,
  onChangeLanguage,
  onChangeType,
  onChangeText,
  searchText
}) => {
  const { space, mediaQueries, borders, input } = useTheme();
  const minTablet = useMediaQuery({
    query: mediaQueries.tablet
  });

  return (
    <Flex
      pb={space.l}
      borderBottom={borders.default}
      borderColor={input.borderColor}
      flexDirection={minTablet ? "row" : "column"}
    >
      <Box mr={space.l} flex={1}>
        <Input
          value={searchText}
          onChange={(event): void => onChangeText(event.currentTarget.value)}
          placeholder="Find a repository..."
        />
      </Box>
      <Flex mt={{ mobile: space.m, tablet: 0 }}>
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
