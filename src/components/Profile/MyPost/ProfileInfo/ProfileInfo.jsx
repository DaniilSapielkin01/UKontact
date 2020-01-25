import React from "react";
import { Spin } from "antd";

import s from "./ProfileInfo.module.css";

export const ProfileInfo = props => {
  if (!props.profile) {
    return <Spin />;
  }
  return (
    <div className={s.profileInfo}>
      <div>
        <img
          src="https://images.unsplash.com/photo-1550645612-83f5d594b671?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          alt=""
        />
      </div>
      <div>
        <img src={props.profile.photos.large} alt="ava" />
      </div>
    </div>
  );
};
