export type UserStatusEmojiType = "sandglass";

export type UserStatus = {
  text: string;
  emoji: UserStatusEmojiType;
};

export type User = {
  name: string;
  email: string;
  locaton?: string;
  avatarSrc: string;
  status: UserStatus;
};
