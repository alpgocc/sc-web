import axios from "axios";

let baseURL = "";
const NODE_ENV = process.env.NODE_ENV;
if (NODE_ENV === "development") {
    baseURL = "";
}
axios.defaults.baseURL = baseURL;


// 登录
export const login = params => {
    return new Promise((resolve, reject) => {
        resolve({
            code: 200,
            data: {
                token: 'abcdefg'
            }
        })
    })
};
// 登出
export const logout = params =>  {
    return new Promise((resolve, reject) => {
        resolve({
            code: 200
        })
    })
};
// 登出
export const getInfo = params => {
    return new Promise((resolve, reject) => {
        resolve({
            user: {
                userName: 'test'
            }
        })
    })
};
