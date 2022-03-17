import axios from "axios";
import { BASE_URL } from "../api";

//adding interceptors for sending auth tokens before requesting of the API endpoint is private and needs tokens
const Axios = async (Method, URL, isPrivate, data = {}) => {
  if (isPrivate) {
    let config;
    const token = JSON.parse(localStorage.getItem("token"));
    if (token == null) {
      return {
        success: false,
        message: "User not found , Authentication Required!",
        ErrorCode: "404",
      };
    } else {
      config = {
        method: Method,
        url: BASE_URL + URL,
        headers: {
          Authorization: token,
        },
      };
      if (Method !== "GET") {
        Object.assign(config, { data: data });
      }
      return await axios(config);
    }
  } else {
    let config = {
      method: Method,
      url: BASE_URL + URL,
      headers: {},
    };
    if (Method !== "GET") {
      Object.assign(config, { data: data });
    }
    return await axios(config);
  }
};

export default Axios;
