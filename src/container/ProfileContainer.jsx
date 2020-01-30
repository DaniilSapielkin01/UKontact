import React from "react";
import { withRouter } from "react-router-dom";

import { Profile } from "../components/Profile/Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../redux/index";
import { compose } from "redux";

class ProfileComponent extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
  }

  render() {

    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile
});
const mapDispatchToProps = {
  getUserProfile
};

export const ProfileContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
  // withAuthRedirect
)(ProfileComponent);
