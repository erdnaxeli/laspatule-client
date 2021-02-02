import axios from "axios";

import store from "../store";

async function get(recipeId) {
  let accessToken = store.state.user.accessToken;
  try {
    let response = await axios.get("/recipes/" + recipeId, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    return response.data;
  } catch {
    return null;
  }
}

async function get_all() {
  let accessToken = store.state.user.accessToken;
  try {
    let response = await axios.get("/recipes", {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    return response.data;
  } catch {
    return null;
  }
}

export default { get, get_all };
