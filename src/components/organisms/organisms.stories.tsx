import React, { useState } from "react";
import {
  ProfileCard,
  RepositorySearchBar,
  WithAllOptionValue
} from "components/organisms";
import { Box } from "components/atoms";
import Me from "assets/me.jpg";
import { User } from "domain/User";
import { RepositoryLanguage, RepositoryType } from "domain/Repository";
import { Avatar } from "components/atoms";

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

export const profileCard = () => {
  const [value, setValue] = useState("Busy");

  return (
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
