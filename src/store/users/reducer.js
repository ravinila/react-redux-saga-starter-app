import update from "immutability-helper";
import * as types from "./types";

const initialState = {
  list: [],
  isLoading: false,
  hasError: false
};

const switchMap = {};

switchMap[types.SET_USERS] = (state, action) =>
  update(state, {
    $merge: {
      list: action.users
    }
  });

export default (state = initialState, action) =>
  switchMap[action.type] ? switchMap[action.type](state, action) : state;
