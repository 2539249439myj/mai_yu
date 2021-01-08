"use strict";

import Vue from 'vue';
import axios from "axios";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = { // axios的配置
  baseURL:"http://musicapi.leanapp.cn/" //设置请求的城名 接口版本v1 v2
  // baseURL:"http://music.kele8.cn"
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config); //根据配置创建axios实例

//axios ajax请求的前躍配置
_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    // api.fuwuqi.com www.fuwuqi.com image.fuwuqi.com session ID
    // config.headers.token='hellotaken testtoken'; //在请求头部添如标记
    // console.log(config);
    // config.url+='?token=1234567890-=fdsa345';
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

//axios 请求之后后置配置
// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    // return response;
    // 处理服务器返回数据
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

// Vue的插件规范
// install方法就是插件安装方法

// 把axios做成vue的插件.
Plugin.install = function(Vue) { // 插件配置
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, { //给Vue的原型对象添加属性，axios $axios $http
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    },
    $http: {
      get() {
        return _axios;
      }
    }
  });
};

// 安装插件
Vue.use(Plugin)

export default Plugin;
