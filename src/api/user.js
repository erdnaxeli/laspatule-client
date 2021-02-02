import axios from "axios";
import { baseUrl } from "./config";

axios.defaults.baseURL = baseUrl;

async function login(email, password) {
  try {
    let response = await axios.post("/user/auth", {
      email,
      password
    });

    return response.data;
  } catch {
    return null;
  }
}

async function getUser(accessToken) {
  try {
    let response = await axios.get("/user", {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    return response.data;
  } catch {
    return null;
  }
}

export default { login, getUser };
