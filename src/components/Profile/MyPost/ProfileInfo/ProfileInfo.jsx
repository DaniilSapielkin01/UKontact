import React from "react";
import { Spin } from "antd";

import s from "./ProfileInfo.module.css";
import { ProfileStatus } from "./ProfileStatus";

export const ProfileInfo = props => {
  if (props.profile) {
    return alert("not");
  }
  console.log(props);

  return (
    <div className={s.profileInfo}>
      <h3>Статус:</h3>
      <ProfileStatus status={"Hello"} />
    </div>
  );
};
