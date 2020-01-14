export type Breakpoints = {
  mobile: string;
  phablet: string;
  tablet: string;
  desktop: string;
};

export const breakpoints = {
  mobile: "0px",
  phablet: "550px",
  tablet: "768px",
  desktop: "992px"
};

export const mediaQueries = Object.keys(breakpoints).reduce(
  (keys, key) => ({
    ...keys,
    [key]: `(min-width: ${breakpoints[key]})`
  }),
  {}
) as Breakpoints;
