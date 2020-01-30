import * as types from "./types";
export const getUsers = () => ({
  type: types.GET_USERS
});

export const setUsers = users => ({
  type: types.SET_USERS,
  users
});
