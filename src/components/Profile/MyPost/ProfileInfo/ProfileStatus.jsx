import React from "react";

export const ProfileStatus = props => {
  return (
    <>
      <div>
        <span>{props.status}</span>
      </div>
      <div>
        <input value={props.status} />
      </div>
    </>
  );
};
