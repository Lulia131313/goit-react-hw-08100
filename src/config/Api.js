import axios from "axios";

export const Api = axios.create({
  baseURL: "https://connections-api.herokuapp.com",
});

// await Api.get("/contacts");
