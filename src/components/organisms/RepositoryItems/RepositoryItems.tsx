import React, { FC } from "react";
import { RepositoryItem } from "components/molecules";
import { Box, Item, Button, Flex } from "components/atoms";
import {
  Repository,
  RepositoryLanguage,
  RepositoryType
} from "domain/Repository";
import { WithAllOptionValue } from "components/organisms";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

type RepositoryItemsProps = {
  items: Repository[];
  searchText?: string;
  type: WithAllOptionValue<RepositoryType>;
  language: WithAllOptionValue<RepositoryLanguage>;
  onClearFilters: () => void;
};

const SummaryItem: FC<RepositoryItemsProps> = ({
  items,
  searchText,
  type,
  language,
  onClearFilters
}) => (
  <Item>
    <Flex alignItems="center">
      <Box flex={1}>
        {`${items.length} results for ${
          type !== "*" ? type : ""
        } repositories ${searchText ? `matching ${searchText}` : ""} ${
          language !== "*" ? `written in ${language}` : ""
        }`}
      </Box>
      <Box>
        <Button onClick={onClearFilters}>
          <FontAwesomeIcon fixedWidth={true} icon={faTimes} />
          Clear filters
        </Button>
      </Box>
    </Flex>
  </Item>
);

export const RepositoryItems: FC<RepositoryItemsProps> = ({
  items,
  searchText,
  type,
  language,
  onClearFilters
}) => (
  <Box width={1}>
    {(searchText || type !== "*" || language !== "*") && (
      <SummaryItem
        onClearFilters={onClearFilters}
        items={items}
        language={language}
        type={type}
        searchText={searchText}
      />
    )}
    {items.map(repository => (
      <RepositoryItem item={repository} />
    ))}
  </Box>
);
