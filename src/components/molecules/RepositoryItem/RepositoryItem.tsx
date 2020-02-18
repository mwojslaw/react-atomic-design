import { Item, Flex, Box, Text, Button, Badge } from "components/atoms";
import React, { FC } from "react";
import { Repository } from "domain/Repository";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "hooks";

export const RepositoryItem: FC<{ item: Repository }> = ({ item }) => {
  const { space } = useTheme();

  return (
    <Item>
      <Flex mb={space.s} alignItems="center">
        <Box flex={1}>{item.name}</Box>
        <Box>
          <Button>
            <FontAwesomeIcon fixedWidth={true} icon={faStar} />
            Star
          </Button>
        </Box>
      </Flex>
      <Text mb={space.m}>{item.description}</Text>
      <Flex>
        <Badge content="2" placement="inline-reverse">
          <Text>{item.language}</Text>
        </Badge>
      </Flex>
    </Item>
  );
};
