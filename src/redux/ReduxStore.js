import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import {
  ProflieReducer,
  DialogsReducer,
  SideBarReducer,
  UserReducer
} from "./index";
import { AuthReducer } from "./AuthReducer";

let reducers = combineReducers({
  dialogsPage: DialogsReducer,
  profilePage: ProflieReducer,
  sideBar: SideBarReducer,
  usersPage: UserReducer,
  auth: AuthReducer
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
