import React from "react";
import * as axios from "axios";
import { Link } from "react-router-dom";

import { Pagination } from "antd";
import s from "./Users.module.css";
import userPhoto from "../../assets/img/user-avatar.jpg";
import { usersAPI } from "../../api/api";

export const Users = props => {
  const {
    pageSize,
    totalUsersCount,
    onPageChanged,
    follow,
    unFollow,
    currentPage,
    toggleFollowingProgress
  } = props;


  return (
    <div className="">
      {props.users.map(u => (
        <div key={u.id} className={s.cardUser}>
          <Link to={"/profile/" + u.id} className={s.avatar}>
            <img
              src={u.photos.small != null ? u.photos.small : userPhoto}
              alt="photo"
            />
          </Link>
          <div className={s.cardInfo}>
            <h5>{u.name}</h5>
            <p className={s.status}>
              <span>Status:</span>
              {u.status != null ? u.status : "Тут нет статуса"}
            </p>
          </div>
          {u.followed ? (
            <button
              disabled={toggleFollowingProgress.some(id => id === u.id)}
              className={s.btnUnfollow}
              onClick={() => {
                props.unfollow(u.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              className={s.btnFollow}
              onClick={() => {
                props.follow(u.id);
              }}
            ></button>
          )}
        </div>
      ))}
      <Pagination
        //Данные взяты с UserReducer
        defaultCurrent={currentPage}
        defaultPageSize={pageSize}
        onChange={onPageChanged}
        total={totalUsersCount}
        className={s.pagination}
      />
    </div>
  );
};
