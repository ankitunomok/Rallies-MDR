import axios from "axios";

export function setAxiosDefault() {
  axios.defaults.timeout = 30 * 1000;
  axios.defaults.baseURL =
    "https://w9gws55h56.execute-api.us-east-1.amazonaws.com/prod/mdr";
  axios.defaults.headers.common["Content-Type"] = "application/json";
  axios.defaults.headers.common["Accept"] = "application/json";
}
