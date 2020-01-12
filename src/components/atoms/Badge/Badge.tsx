import styled, { DefaultTheme } from "styled-components";
import React, { FC } from "react";
import { Flex, InlineFlex } from "components/atoms";

type BadgePlacement = "top-right" | "inline";

const getPlacementConfig = (placement: BadgePlacement, theme: DefaultTheme) => {
  switch (placement) {
    case "top-right": {
      return `
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(95%, -50%);
        `;
    }
    case "inline": {
      return `margin-left: ${theme.space.xs}px;`;
    }
  }
};

const BadgeIndicator = styled(Flex)<{ placement: BadgePlacement }>`
  border-radius: ${({ theme }) => theme.radii.xl}px;
  background: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.grayDark};
  font-size: ${({ theme }) => theme.fontSizes.m}px;
  padding: 0 6px;
  font-weight: bold;
  ${({ placement, theme }) => getPlacementConfig(placement, theme)}
`;

export const Badge: FC<{ content: string; placement: BadgePlacement }> = ({
  children,
  content,
  placement
}) => (
  <InlineFlex position="relative" alignItems="center">
    {children}
    <BadgeIndicator placement={placement}>{content}</BadgeIndicator>
  </InlineFlex>
);
