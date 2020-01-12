import React from "react";
import { Card, Flex, Box, Input, Button, Badge, Tab } from "components/atoms";
import { space, colors } from "theme";

export default {
  title: "Atoms"
};

export const card = () => <Card width="250px" height="250px" />;

export const flexBox = () => (
  <Flex flexDirection="column">
    <Flex>
      <Box
        border="1px solid"
        borderColor={colors.gray}
        color={colors.grayDark}
        width={1 / 3}
        p={space.l}
        m={space.s}
      >
        width: 1/3
      </Box>
      <Box
        border="1px solid"
        borderColor={colors.gray}
        color={colors.grayDark}
        width={2 / 3}
        p={space.l}
        m={space.s}
      >
        width: 2/3
      </Box>
    </Flex>
    <Flex>
      <Box
        border="1px solid"
        color={colors.grayDark}
        borderColor={colors.gray}
        width="300px"
        p={space.l}
        m={space.s}
      >
        width: 300px
      </Box>
      <Box
        border="1px solid"
        color={colors.grayDark}
        borderColor={colors.gray}
        flex={1}
        p={space.l}
        m={space.s}
      >
        flex: 1
      </Box>
    </Flex>
  </Flex>
);

export const input = () => <Input />;

export const button = () => <Button>New project</Button>;

export const badge = () => (
  <div>
    <div>
      <Badge content="100" placement="inline">
        Inline
      </Badge>
    </div>
    <Box mt={space.xl}>
      <Badge content="5" placement="top-right">
        Top-right
      </Badge>
    </Box>
  </div>
);

export const tab = () => (
  <Flex>
    <Box mr={space.xs}>
      <Tab disabled={true}>Overview</Tab>
    </Box>
    <Box mr={space.xs}>
      <Tab>
        <Badge placement="inline" content="10">
          Repositories
        </Badge>
      </Tab>
    </Box>
    <Box mr={space.xs}>
      <Tab selected={true}>
        <Badge placement="inline" content="0">
          Projects
        </Badge>
      </Tab>
    </Box>
  </Flex>
);
