import React from "react";

import { ProfileInfo } from "./MyPost/ProfileInfo/ProfileInfo";
import { MyPostsContainer } from "../../container/MyPostsContainer";

export const Profile = props => {
  return (
    <div>
      <ProfileInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
};
