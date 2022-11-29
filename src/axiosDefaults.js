import axios from "axios";

export function setAxiosDefault() {
  axios.defaults.timeout = 30 * 1000;
  axios.defaults.baseURL =
    "https://1u7uy5f6qk.execute-api.us-east-1.amazonaws.com/dev/mdr";
  axios.defaults.headers.common["Content-Type"] = "application/json";
  axios.defaults.headers.common["Accept"] = "application/json";
}
