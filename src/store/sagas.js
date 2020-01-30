import { all } from "redux-saga/effects";
import { sagas as userSagas } from "./users";

export default function*() {
  yield all([...userSagas.map(saga => saga())]);
}
