import Vue from 'vue';
import axios from 'axios';
import baseConfig from '@/config'; // 导入全局环境变量

// 设置默认请求头
axios.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded',
};

const baseURL =
  process.env.NODE_ENV === 'development'
    ? baseConfig.baseUrl.dev
    : baseConfig.baseUrl.pro;

axios.defaults.baseURL = baseURL;
// 请求超时的时间限制
axios.defaults.timeout = 20000;

// 开始设置请求 发起的拦截处理
// config 代表发起请求的参数的实体
axios.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  },
);

// 请求到结果的拦截处理
axios.interceptors.response.use(
  (config: any) => {
    return config.data;
  },
  (error: any) => {
    return Promise.reject(error);
    // 错误的请求结果处理，这里的代码根据后台的状态码来决定错误的输出信息
  },
);

export default axios;
