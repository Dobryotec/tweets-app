import axios from "axios";

axios.defaults.baseURL = "https://6454f6daf803f345763642af.mockapi.io";

export const fetchUsers = async () => {
  const { data } = await axios.get("/users");
  return data;
};
