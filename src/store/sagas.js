import { all } from "redux-saga/effects";
import { sagas as userSagas } from "./users";
// import { sagas as otherSagas } from "./otherModule";

export default function*() {
  yield all([
    ...userSagas.map(saga => saga()),
    //...otherSagas.map(saga => saga()),
  ]);
}
