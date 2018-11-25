import axios from "axios";

//axios.create() allows us to create an instance of axios with some preset parameters

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 80c4f3cef86bf1e6612b1c3f283ae310e3591d3985fd1dbefe1e3e7cb8ede4b8"
  }
});
