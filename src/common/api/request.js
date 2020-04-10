import axios from "axios";
import qs from "qs";
import { message } from 'antd';
import { getToken, removeToken } from '../../index/utils/auth'
import { Modal } from 'antd';

axios.defaults.timeout = 10000;

axios.interceptors.request.use(
    config => {
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

axios.interceptors.response.use(
    res => {
        if (res && res.data) {
            if (res.data.code === 401) {
                removeToken()
                Modal.warning({
                    title: '提示',
                    content: '登录信息已失效，请重新登录',
                    okText: '确认',
                    onOk: () => {
                        window.location.reload()
                    }
                });
                return res;
            } else if (res.data.code === 500) {
                message.error(res.data.msg);
                return Promise.reject(res);
            } else {
                return Promise.resolve(res);
            }
        }
    },
    err => {
        return Promise.reject(err);
    }
);

export default async (url, params = {}, method = "POST", isUpload = false) => {
    const tokenHeaders = {
    }
    const token = getToken()
    if (token) {
        tokenHeaders.Authorization = 'Bearer ' + token
    }

    method = method.toUpperCase();
    if (method === "GET") {
        const res = await axios.get(url, {
            params,
            headers: tokenHeaders
        });
        return res.data;
    } else if (method === "DELETE") {
        const res = await axios.delete(url, {
            params,
            headers: tokenHeaders
        });
        return res.data;
    } else if (method === "POST") {
        const normal = {
            headers: {
                ...tokenHeaders
            }
        };
        const upload = {
            headers: {
                ...tokenHeaders,
                "Content-Type": "multipart/form-data"
            }
        };
        const res = await axios.post(url, params, isUpload ? upload : normal);
        return res.data;
    } else if (method === "PUT") {
        const normal = {
            headers: {
                ...tokenHeaders,
            }
        };
        const upload = {
            headers: {
                ...tokenHeaders,
                "Content-Type": "multipart/form-data"
            }
        };
        const res = await axios.put(url, params, isUpload ? upload : normal);
        return res.data;
    } else if (method === "POST_JSON") {
        const res = await axios.post(url, params, {
            headers: {
                ...tokenHeaders,
                "Content-Type":"application/json"
            }
        });
        return res.data;
    } else if (method === "GET_ENCODE") {
        const res = await axios.get(url);
        return res.data;
    }
};
