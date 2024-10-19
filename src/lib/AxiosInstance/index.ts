import axios from "axios";

import envConfig from "@/src/config/env.config";

const axiosInstance = axios.create({
  baseURL: envConfig.baseApi,
});

export default axiosInstance;
