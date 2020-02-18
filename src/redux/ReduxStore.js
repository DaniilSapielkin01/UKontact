import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

import {
  ProflieReducer,
  DialogsReducer,
  SideBarReducer,
  UserReducer,
  AppReducer
} from "./index";
import { AuthReducer } from "./AuthReducer";

let reducers = combineReducers({
  dialogsPage: DialogsReducer,
  profilePage: ProflieReducer,
  sideBar: SideBarReducer,
  usersPage: UserReducer,
  auth: AuthReducer,
  form: formReducer,
  app: AppReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);
window.store = store;
