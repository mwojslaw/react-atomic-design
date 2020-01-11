import styled from "styled-components";
import { borderRadius } from "mixins";
import { Flex } from "atoms";

export const Card = styled(Flex).attrs({
  direction: "column"
})`
  border: ${({ theme }) => theme.inputBorder};
  ${borderRadius({ side: "all", value: "3px" })}
`;
