import React from "react";
import { Link } from "react-router-dom";

import s from "./Header.module.css";

export const Header = props => {
  return (
    <header className={s.header}>
      <img
        src="https://pbs.twimg.com/profile_images/1037715319496814592/tWCI41hH_400x400.jpg"
        alt="img"
      />
      <div className={s.nameLogo}>UKontact</div>
      <div className={s.toLogin}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Logout</button>
          </div>
        ) : (
          <Link to={"/login"}>To Login</Link>
        )}
      </div>
    </header>
  );
};
