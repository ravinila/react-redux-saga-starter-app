import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "./types";
import * as actions from "./actions";

import { getUsers as usersAPI } from "../../api/users";

function* getUsers() {
  console.log("ex");
  try {
    const response = yield call(usersAPI);
    const data = response.data;
    console.log(data, "data", response);
    yield put(actions.setUsers(data.data));
  } catch (ex) {
    console.log(ex);
  }
}
function* watchGetUsers() {
  yield takeLatest(types.GET_USERS, getUsers);
}
export default [watchGetUsers];
