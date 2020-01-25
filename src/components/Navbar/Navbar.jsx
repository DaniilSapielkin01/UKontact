import React from "react";
import { NavLink } from "react-router-dom";

import s from "./Navbar.module.css";

export const Navbar = props => {
  let usersSiteBar = props.state.users.map(user => (
    <div className={s.profileSitebar} key={user.id}>
      <img src={user.image} alt="icon" />
      <h5 className={s.titleUser}>{user.name}</h5>
    </div>
  ));
  return (
    <div className="">
      <nav className={s.nav}>
        <NavLink to="/profile" className={s.item} activeClassName={s.active}>
          <div>
            <span className="icon-user"></span>Profile
          </div>
        </NavLink>
        <NavLink to="/users" className={s.item} activeClassName={s.active}>
          <div>
            <span className="icon-users"></span>Users
          </div>
        </NavLink>
        <NavLink to="/dialogs" className={s.item} activeClassName={s.active}>
          <div>
            <span className="icon-mail"></span>Messenger
          </div>
        </NavLink>
        <NavLink to="/News" className={s.item} activeClassName={s.active}>
          <div>
            {" "}
            <span className="icon-doc"></span>News
          </div>
        </NavLink>
        <NavLink to="/Music" className={s.item} activeClassName={s.active}>
          <div>
            {" "}
            <span className="icon-note-beamed"></span>Music
          </div>
        </NavLink>
        <NavLink to="/movies" className={s.item} activeClassName={s.active}>
          <div>
            <span className="icon-videocam"></span>Movies
          </div>
        </NavLink>
        <NavLink to="/Setting" className={s.item} activeClassName={s.active}>
          <div>
            {" "}
            <span className="icon-cog-alt"></span>Setting
          </div>
        </NavLink>
      </nav>
      <div className={s.usersSiteBar}>{usersSiteBar}</div>
    </div>
  );
};
