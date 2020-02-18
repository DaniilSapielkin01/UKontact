import React from "react";
import { connect } from "react-redux";
import { Spin } from "antd";

import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  requiestUsers, // заменен  getUserss
  getUsers,
  getTotalUsersCount,
  getPageSize,
  getIsFetching,
  getCurrentPage,
  getFollowingInProgress
} from "../redux/index";
import { Users } from "../components/index";
import { compose } from "redux";

class UsersComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = pageNumber => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <div>
        {this.props.isFetching ? <Spin /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
        />
      </div>
    );
  }
}
//users: state. ==> usersPage <==this in redux/ReduxStore name in store branch with info for users.
// const mapStateToProps = state => ({
//   users: state.usersPage.users,
//   pageSize: state.usersPage.pageSize,
//   totalUsersCount: state.usersPage.totalUsersCount,
//   currentPage: state.usersPage.currentPage,
//   isFetching: state.usersPage.isFetching,
//   followingInProgress: state.usersPage.followingInProgress
// });
const mapStateToProps = state => ({
  users: getUsers(state),
  pageSize: getPageSize(state),
  totalUsersCount: getTotalUsersCount(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  followingInProgress: getFollowingInProgress(state)
});

const mapDispatchToProps = {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers: requiestUsers
};
export const UsersContainer = compose(
  // withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(UsersComponent);
