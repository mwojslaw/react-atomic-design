import { ThemeContext } from "styled-components";
import { Flex } from "components/atoms";
import React, { useContext, FC } from "react";
import CSS from "csstype";

export const Card: FC<{
  width: CSS.WidthProperty<number>;
  height: CSS.WidthProperty<number>;
}> = ({ children, width, height }) => {
  const { colors, radii } = useContext(ThemeContext);

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
