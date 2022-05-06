import axios from "axios";
import setup from "./setupInterceptor";

const instance = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
})

setup(instance)

export default instance