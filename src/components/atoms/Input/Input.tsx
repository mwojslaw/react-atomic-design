import styled from "styled-components";

export const Input = styled.input`
  :focus {
    outline: none;
  }
  ${({ theme }) => theme.input}
`;
