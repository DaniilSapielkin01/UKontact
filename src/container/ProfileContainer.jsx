import React from "react";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";

import { Profile } from "../components/Profile/Profile";
import { getUserProfile, getStatus, updateStatus } from "../redux/index";

class ProfileComponent extends React.Component {
  componentDidMount() {
    //Не пускает к профилю если не залогинен
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    console.log(this.props.profile);
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
});
const mapDispatchToProps = {
  getUserProfile,
  getStatus,
  updateStatus
};

export const ProfileContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
  // withAuthRedirect
)(ProfileComponent);
