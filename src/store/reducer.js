import { combineReducers } from "redux";

import { SCOPE as userSCOPE, reducer as userReducer } from "./users";

export default combineReducers({
  [userSCOPE]: userReducer
});
