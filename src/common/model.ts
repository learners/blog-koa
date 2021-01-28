// 错误码
const STATUS = {
  'NO_LOGIN': 1000, // 未登录
  'REG_INVALID_ACCOUNT': 2000,
  'REG_INVALID_PASSWORD': 2001
}
const STATUS_TEXT = {
  [STATUS.NO_LOGIN]: '用户未登录'
}

// 返回 JSON 数据模型
export function success(data: unknown, message?: string) {
  if (typeof data === 'string' && typeof message === 'undefined') {
    return {
      code: 0,
      data: null,
      message: data
    }
  }
  message = message || 'success'
  return {
    code: 0,
    data,
    message
  }
}

/**
 * 错误响应
 * @param {string} message 错误消息
 * @param {number} code 错误码
 */
export function error(message = 'fail', code = 1) {
  return {
    data: null,
    message,
    code
  }
}
