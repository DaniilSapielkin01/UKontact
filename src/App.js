import React from "react";
import { Route } from "react-router-dom";

import "./App.css";
import {
  DialogsContainer,
  UsersContainer,
  NavbarContainer,
  ProfileContainer,
  HeaderContainer
} from "./container/index";
import { LogContainer } from "./components";

class App extends React.Component {
  // componentDidMount() {
  //   this.props.getAuthUserData();
  // }

  render() {
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
export default App;
