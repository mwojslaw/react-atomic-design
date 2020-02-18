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
  PositionProps,
  compose,
  border
} from "styled-system";

type BoxProps = SpaceProps &
  LayoutProps &
  FlexProps &
  BorderProps &
  PositionProps;

export const Box = styled.div<BoxProps>(
  compose(space, layout, flex, border, position)
);

export const Flex = styled(Box)<FlexboxProps>(flexbox, {
  display: "flex"
});

export const InlineFlex = styled(Flex)({
  display: "inline-flex"
});
