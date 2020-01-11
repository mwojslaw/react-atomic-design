import styled from "styled-components";

export const Box = styled.div<{
  m?: string | number;
  p?: string | number;
  flex?: number;
  w?: string | number;
  h?: string | number;
}>`
  margin: ${({ m, theme: { space } }) =>
    typeof m === "number" ? `${space[m]}px` : m};
  padding: ${({ p, theme: { space } }) =>
    typeof p === "number" ? `${space[p]}px` : p};
  flex: ${({ flex }) => flex};
  width: ${({ w }) => (typeof w === "number" ? `${w * 100}%` : w)};
  height: ${({ h }) => (typeof h === "number" ? `${h * 100}%` : h)};
  box-sizing: border-box;
`;

export const Flex = styled(Box)<{
  align?: string;
  justify?: string;
  direction?: string;
}>`
  display: flex;
  align-items: ${({ align }) => align};
  justify-content: ${({ justify }) => justify};
  flex-direction: ${({ direction }) => direction};
`;

export const InlineFlex = styled(Flex)`
  display: inline-flex;
`;
