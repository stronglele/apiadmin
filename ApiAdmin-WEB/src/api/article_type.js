import axios from '@/libs/api.request'

/**
 * 获取用户列表
 * @param params
 * @returns {never}
 */
export const getList = (params) => {
  return axios.request({
    url: 'ArticleType/index',
    method: 'get',
    params: params
  })
}

/**
 * 修改用户状态
 * @param status
 * @param id
 * @returns {never}
 */
export const changeStatus = (status, id) => {
  return axios.request({
    url: 'ArticleType/changeStatus',
    method: 'get',
    params: {
      status: status,
      id: id
    }
  })
}

/**
 * 新增用户
 * @param data
 * @returns {wx.RequestTask | never}
 */
export const add = (data) => {
  return axios.request({
    url: 'ArticleType/add',
    method: 'post',
    data
  })
}

/**
 * 编辑用户
 * @param data
 * @returns {wx.RequestTask | never}
 */
export const edit = (data) => {
  return axios.request({
    url: 'ArticleType/edit',
    method: 'post',
    data
  })
}

/**
 * 删除用户
 * @param status
 * @param id
 * @returns {wx.RequestTask | never}
 */
export const del = (id) => {
  return axios.request({
    url: 'ArticleType/del',
    method: 'get',
    params: {
      id: id
    }
  })
}

export const own = (data) => {
  return axios.request({
    url: 'ArticleType/own',
    method: 'post',
    data
  })
}
