import axios from "axios";
import querystring from 'querystring'

const instance = axios.create({
  // 网络请求的公共配置
  timeout: 5000, //网络超时设置5s

})

const errorHandle = (status, info) => {
  switch (status) {
    case 400:
      console.log('语义有错')
      break
    case 401:
      console.log('服务器认证失败')
      break
    case 403:
      console.log('服务器拒绝访问')
      break
    case 404:
      console.log('请求地址出错')
      break
    case 500:
      console.log('服务器请求报错')
      break
    case 502:
      console.log('服务器无响应')
      break
    default:
      console.log(info)
      break
  }
}

instance.interceptors.request.use(
  config => {
    // 包含着网络请求的所有信息
    if (config.method === 'post'){
      config.data = querystring.stringify(config.data)
    }
    console.log('instance.interceptors.request config')
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    return response.status === 200? Promise.resolve(response): Promise.reject(response)
  },
  error => {
    const { response } = error
    errorHandle(response['status'], response['info'])
    return Promise.reject(error)
  }
)

export default instance
