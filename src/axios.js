import axios from "axios";
import { baseUrl } from "./constants/constants";

const instance = axios.create({
    baseURL: baseUrl,
    timeout:10000
  });

  export default instance