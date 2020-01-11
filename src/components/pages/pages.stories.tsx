import React from "react";
import { Profile } from "components/pages";
import Me from "assets/me.jpg";
import { User } from "domain/User";

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

export default {
  title: "Pages"
};

export const profile = () => <Profile user={user} />;
