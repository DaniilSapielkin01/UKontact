import React from "react";
import { connect } from "react-redux";

import { getAuthUserDara } from "../redux/index";
import { Header } from "../components/Header/Header";

export class HeaderComponent extends React.Component {
  componentDidMount() {
    this.props.getAuthUserDara();
  }
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
});
const mapDispatchToProps = {
  getAuthUserDara
};

export const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent);
