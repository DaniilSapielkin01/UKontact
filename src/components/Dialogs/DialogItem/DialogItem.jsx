import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

export const DialogItem = props => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink className={s.linkMessage} to={path} activeClassName={s.active}>
        <img className={s.iconProfile} src={props.image} alt="icon" />
        <h6 className={s.nameProfile}>{props.name}</h6>
      </NavLink>
    </div>
  );
};
