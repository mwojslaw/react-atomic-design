import React from "react";
import { Card, Flex, Box } from "atoms";

export default {
  title: "Atoms"
};

export const card = () => <Card w="250px" h="250px" />;

export const flexBox = () => (
  <Flex direction="column">
    <Flex>
      <Box
        style={{
          background: "#68b47c",
          color: "white"
        }}
        w={1 / 3}
        p={3}
        m={1}
      >
        width: 1/3
      </Box>
      <Box
        style={{
          background: "#4990E2",
          color: "white"
        }}
        w={2 / 3}
        p={3}
        m={1}
      >
        width: 2/3
      </Box>
    </Flex>
    <Flex>
      <Box
        style={{
          background: "#78dc91",
          color: "white"
        }}
        w="300px"
        p={3}
        m={1}
      >
        width: 300px
      </Box>
      <Box
        style={{
          background: "#32C7FF",
          color: "white"
        }}
        flex={1}
        p={3}
        m={1}
      >
        flex: 1
      </Box>
    </Flex>
  </Flex>
);
