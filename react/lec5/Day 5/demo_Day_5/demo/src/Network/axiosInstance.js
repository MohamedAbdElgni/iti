import axios from "axios";
import { changeLoader } from "../Store/Actions/LoaderAction";
import myStore from "../Store/Store";

export const axiosInstance = axios.create({
    baseURL: "https://retoolapi.dev/2d474J"
})

// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    myStore.dispatch(changeLoader(true))
    
    config["params"] = {
        api_key: "123",
        myid: "1234567"
    }
    config.headers["Authorization"] = "myTOKEN"
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    myStore.dispatch(changeLoader(false))
    return response;
  }, function (error) {
    return Promise.reject(error);
  });