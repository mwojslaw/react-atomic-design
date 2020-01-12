import styled from "styled-components";
import { inputBase } from "components/atoms/Input";

export const Button = styled.button`
  ${inputBase}
  background: ${({ theme }) => theme.button.background};
  cursor: pointer;
  font-weight: bold;
`;
