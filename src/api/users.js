import axios from "axios";
const API = "https://reqres.in/api/users?page=2";

export const getUsers = () => {
  return axios.get(API);
};
