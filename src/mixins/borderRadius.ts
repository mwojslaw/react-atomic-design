export type BorderRadiusProps = {
  side: "all";
  value: string;
};

export const borderRadius = ({ side, value }: BorderRadiusProps) =>
  ({
    all: `border-radius: ${value}`
  }[side]);
