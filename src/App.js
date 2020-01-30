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
import { Login } from "./components";

function App() {
  // console.log(props.store);

  return (
    <div className="wrapper">
      <HeaderContainer />
      <NavbarContainer />
      <div className="app-wrapper-content">
        <Route exact path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/login" render={() => <Login />} />
      </div>
    </div>
  );
}

export default App;
