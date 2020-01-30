import { connect } from "react-redux";
import { createSelector } from "reselect";
import { usersSelector } from "../../store/users/selectors";
import { getUsers } from "../../store/users/actions";

import UsersList from "./UsersList";

export const selector = createSelector(
  usersSelector,
  users => ({
    users
  })
);

export default connect(
  selector,
  {
    getUsers
  }
)(UsersList);
