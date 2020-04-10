import axios from "axios";
import fetch from "./request";

let baseURL = "";
const NODE_ENV = process.env.NODE_ENV;
if (NODE_ENV === "development") {
    baseURL = "";
}
axios.defaults.baseURL = baseURL;


// 登录
export const login = params => fetch("/api/login", params, "POST");
// 登出
export const logout = params => fetch("/api/logout", params, "POST");
// 登出
export const getInfo = params => fetch("/api/getInfo", params, "GET");
