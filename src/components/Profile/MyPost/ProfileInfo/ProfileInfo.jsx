import React from "react";
import { Spin } from "antd";

import s from "./ProfileInfo.module.css";
// import { ProfileStatus } from "./ProfileStatus";
import { ProfileStatusWithHooks } from "./ProfileStatusWithHooks";

export const ProfileInfo = props => {
  if (props.profile) {
    return <Spin />;
  }
  console.log(props);

  return (
    <div className={s.profileInfo}>
      {/* <img src={props.profile.photos.large} /> */}
      <h3>Статус:</h3>
      <ProfileStatusWithHooks
        status={props.status}
        updateStatus={props.updateStatus}
      />
    </div>
  );
};
