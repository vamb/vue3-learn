import requests from "@/utils/requests";
import path from "@/api/path";

const api = {
  // 诚品详情地址
  getChengpin() {
    return requests.get(path.baseUrl + path.chengpin)
  }
}

export default api
