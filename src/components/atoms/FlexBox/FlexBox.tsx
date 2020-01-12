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
  BorderProps,
  position,
  PositionProps
} from "styled-system";
import { border } from "styled-system";

export const Box = styled.div<
  SpaceProps & LayoutProps & FlexProps & BorderProps & PositionProps
>(space, layout, flex, border, position, {
  boxSizing: "border-box"
});

export const Flex = styled(Box)<FlexboxProps>(flexbox, {
  display: "flex"
});

export const InlineFlex = styled(Flex)({
  display: "inline-flex"
});
