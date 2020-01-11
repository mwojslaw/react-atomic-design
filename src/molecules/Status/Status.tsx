import React, { FC, ReactNode } from "react";

type EmojiTypes = "sandglass";
export type StatusProps = { emoji: EmojiTypes; text: string };

export const Status: FC<StatusProps> = ({ emoji, text }) => (
  <div>
    {emoji === "sandglass" ? <span>&#8987;</span> : null}
    <span>{text}</span>
  </div>
);
