import axios from "axios";

const aoi  axios.create({
  baseURL: "http://localhost:5001/api",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  timeout: 10000,
  withCredentials: true,
});

export default aoi;