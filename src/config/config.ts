import axios from "axios";
export const Axios = axios.create({
  baseURL: "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
