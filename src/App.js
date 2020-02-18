import React from "react";
import { Route, withRouter } from "react-router-dom";
import { compose } from "redux";

// import { Spin } from "antd";
import "./App.css";
import {
  DialogsContainer,
  UsersContainer,
  NavbarContainer,
  ProfileContainer,
  HeaderContainer
} from "./container/index";
import { LogContainer } from "./components";
import { connect } from "react-redux";
import { initializeApp } from "./redux/index";

// const DialogsContainer = React.lazy(
//   async () => await import("./container/index")
// );
// const ProfileContainer = React.lazy(() => import("./container/index"));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    // if (!this.props.initialized) {
    //   return <Spin />;
    // }
    return (
      <div className="wrapper">
        <HeaderContainer />
        <NavbarContainer />
        <div className="app-wrapper-content">
          <Route exact path="/dialogs" render={() => <DialogsContainer />} />

          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <LogContainer />} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  initialized: state.app.initialized
});

const mapDispatchToProps = {
  initializeApp
};
export const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App);
