import { Flex } from "components/atoms";
import React, { FC } from "react";
import CSS from "csstype";
import { useTheme } from "hooks";

export const Card: FC<{
  width: CSS.WidthProperty<number>;
  height: CSS.WidthProperty<number>;
}> = ({ children, width, height }) => {
  const { colors, radii } = useTheme();

  return (
    <Flex
      width={width}
      height={height}
      borderStyle="solid"
      borderWidth="1px"
      borderRadius={radii.s}
      flexDirection="column"
      borderColor={colors.gray}
    >
      {children}
    </Flex>
  );
};
