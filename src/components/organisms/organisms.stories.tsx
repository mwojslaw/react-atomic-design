import React, { useState } from "react";
import {
  Avatar,
  ProfileCard,
  RepositorySearchBar,
  WithAllOptionValue
} from "components/organisms";
import { Box } from "components/atoms";
import Me from "assets/me.jpg";
import { User } from "domain/User";
import { RepositoryLanguage, RepositoryType } from "domain/Repository";

export default {
  title: "Organisms"
};

const user: User = {
  name: "mwojslaw",
  email: "maciej.wojslaw.bebz@gmail.com",
  locaton: "Kraków",
  avatarSrc: Me,
  status: {
    text: "",
    emoji: "sandglass"
  }
};

export const avatar = () => {
  const [value, setValue] = useState("Busy");

  return (
    <Avatar
      user={{
        ...user,
        status: {
          ...user.status,
          text: value
        }
      }}
      onStatusChange={setValue}
      width="250px"
      height="250px"
    />
  );
};

export const profileCard = () => {
  const [value, setValue] = useState("Busy");

  return (
    <Box width={1 / 4}>
      <ProfileCard
        user={{
          ...user,
          status: {
            ...user.status,
            text: value
          }
        }}
        onStatusChange={setValue}
      />
    </Box>
  );
};

export const repositorySearchBar = () => {
  const [type, setType] = useState<WithAllOptionValue<RepositoryType>>("*");
  const [language, setLanguage] = useState<
    WithAllOptionValue<RepositoryLanguage>
  >("*");

  return (
    <RepositorySearchBar
      language={language}
      onChangeLanguage={setLanguage}
      onChangeType={setType}
      languages={["*", "javascript", "typescript"]}
      type={type}
      types={["*", "private", "public"]}
    />
  );
};
