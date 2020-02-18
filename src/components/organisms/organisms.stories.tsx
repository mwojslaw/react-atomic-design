import React, { useState } from "react";
import {
  ProfileCard,
  RepositorySearchBar,
  WithAllOptionValue,
  RepositoryItems
} from "components/organisms";
import Me from "assets/me.jpg";
import { User } from "domain/User";
import { RepositoryLanguage, RepositoryType } from "domain/Repository";
import { action } from "@storybook/addon-actions";

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

export const repositoryItems = () => (
  <RepositoryItems
    onClearFilters={action("onClearFilters")}
    type="*"
    language="*"
    items={[
      {
        name: "react-atomic-design",
        description: "In search of PERFECT* design system for react",
        language: "typescript",
        type: "public"
      },
      {
        name: "react-cqrs",
        description: "",
        language: "javascript",
        type: "public"
      }
    ]}
  />
);

export const repositoryItemsEmpty = () => (
  <RepositoryItems
    onClearFilters={action("onClearFilters")}
    type="public"
    language="javascript"
    searchText={"Hahaha"}
    items={[]}
  />
);
