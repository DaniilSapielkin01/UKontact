import React from "react";
import * as axios from "axios";
import { withRouter } from "react-router-dom";

import { Profile } from "../components/Profile/Profile";
import { connect } from "react-redux";
import { setUserProfile } from "../redux/index";

class ProfileComponent extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    let url = `https://social-network.samuraijs.com/api/1.0/profile/${userId}`;
    axios.get(url).then(response => {
      this.props.setUserProfile(response.data);
    });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile
});
const mapDispatchToProps = {
  setUserProfile
};

let withUrlDataContanerComponent = withRouter(ProfileComponent);

export const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(withUrlDataContanerComponent);
