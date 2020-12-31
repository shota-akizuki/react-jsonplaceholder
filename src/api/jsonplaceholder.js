import axios from "axios";

//baseURL＝これから使いたいURLの共通部分
export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});
