import React, { useEffect } from "react";
import "./index.css";

const UsersList = ({ users, getUsers }) => {
  console.log(users, getUsers);
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <ul className="users">
      {users.map(user => {
        return (
          <li key={user.id}>
            <span>{user.first_name}</span>
            <span>{user.last_name}</span>
            <span>{user.email}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default UsersList;
