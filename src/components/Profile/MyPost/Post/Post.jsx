import React from "react";
import s from "./Post.module.css";

export const Post = props => {
  console.log(props.message);

  return (
    <div className={s.item}>
      <img src="https://www.blexar.com/avatar.png" alt="avatar" />
      {props.message}
      <div className="">
        <span>like</span>
      </div>
    </div>
  );
};