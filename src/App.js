import React from "react";
import { Provider } from "react-redux";
import "./styles.css";

import { UsersList } from "./components/UsersManager";

import store from "./store";

export default function App() {
  return (
    <div className="App">
      <h1>Users List</h1>
      <Provider store={store}>
        <UsersList />
      </Provider>
    </div>
  );
}
