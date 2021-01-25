import axios from "axios"
import { baseUrl } from "./config"

async function login(email, password) {
  try {
    let response = await axios.post(baseUrl + "/user/auth", {
      email,
      password
    })

    return response.data
  }
  catch {
    return null
  }
}

export { login }
