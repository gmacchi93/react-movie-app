import axios from "axios";

const client = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
    "content-type": "application/json",
  },
  params: {
    api_key: process.env.REACT_APP_THE_MOVIEDB_API_KEY
  }
});

export default client;
