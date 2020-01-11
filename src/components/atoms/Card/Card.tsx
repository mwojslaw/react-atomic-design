import styled from "styled-components";
import { Flex } from "components/atoms";

export const Card = styled(Flex).attrs({
  direction: "column"
})`
  border: ${({ theme }) => theme.inputBorder};
  border-radius: ${({ theme }) => theme.inputBorderRadius};
`;
