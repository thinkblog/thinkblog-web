import request from "~/api/request";

export default class Post {
  static getList(params){
    return request({
      method: 'get',
      url: '/post/list',
      params
    })
  }
}
