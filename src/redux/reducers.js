import { combineReducers } from "redux";
import settings from "./settings/reducer";
import menu from "./menu/reducer";
import authUser from "./auth/reducer";
import reservation from "./reservation/reducer";

const reducers = combineReducers({
  menu,
  settings,
  authUser,
  reservation,
});

export default reducers;
