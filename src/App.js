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

function App(props) {
  return (
    <div className="wrapper">
      <HeaderContainer />
      <NavbarContainer />
      <div className="app-wrapper-content">
        <Route
          exact
          path="/dialogs"
          render={() => <DialogsContainer store={props.store} />}
        />
        <Route
          path="/profile/:userId?"
          render={() => <ProfileContainer store={props.store} />}
        />
        <Route path="/users" render={() => <UsersContainer />} />
      </div>
    </div>
  );
}

export default App;
