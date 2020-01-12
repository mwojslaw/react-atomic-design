import styled from "styled-components";
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  flex,
  FlexProps,
  flexbox,
  FlexboxProps,
  BorderProps
} from "styled-system";
import { border } from "styled-system";

export const Box = styled.div<
  SpaceProps & LayoutProps & FlexProps & BorderProps
>(space, layout, flex, border, {
  boxSizing: "border-box"
});

export const Flex = styled(Box)<FlexboxProps>(flexbox, {
  display: "flex"
});

export const InlineFlex = styled(Flex)({
  display: "inline-flex"
});
