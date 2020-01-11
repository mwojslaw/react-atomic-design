import styled from "styled-components";
import { Flex } from "atoms";

export const Card = styled(Flex).attrs({
  direction: "column"
})`
  border: ${({ theme }) => theme.inputBorder};
  border-radius: 3px;
`;
