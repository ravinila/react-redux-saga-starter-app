import { createSelector } from "reselect";
import { SCOPE } from "./types";

const selector = state => state[SCOPE];

export default selector;

export const usersSelector = createSelector(
  selector,
  users => users.list
);
