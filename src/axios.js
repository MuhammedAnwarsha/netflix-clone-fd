import axios from "axios";
import { baseUrl } from "./constants/Constents";

const instance = axios.create({
    baseURL: baseUrl
  });

  export default instance