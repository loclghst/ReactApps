import axios from "axios";

const KEY = "AIzaSyBtRz7tuY0VHfs73B_af3eKE1YTTl12hbI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
