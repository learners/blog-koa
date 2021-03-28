// 错误码
export const STATUS = {
  'NO_LOGIN': 1000, // 未登录
  'LOGIN_ERROR': 1001, // 登录失败
  'REG_INVALID_ACCOUNT': 2000,
  'REG_INVALID_PASSWORD': 2001
}

export const STATUS_TEXT = {
  [STATUS.NO_LOGIN]: '用户未登录',
  [STATUS.LOGIN_ERROR]: '用户登录失败'
}

/**
 * 成功响应
 * @param {unknown} data 响应数据
 * @param {string} message 成功消息
 */
export function successModel(data: unknown, message?: string) {
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

type ErrorModel = {
  (message?: number | string, code?: number): any
} & typeof STATUS

/**
 * 错误响应
 * @param {number|string} message 错误消息
 * @param {number} code 错误码
 */
export const errorModel: ErrorModel = Object.assign(
  (message: number | string = 'fail', code = 1) => {
    if (typeof message === 'number' && message in STATUS_TEXT) {
      code = message
      message = STATUS_TEXT[message]
    }
    return {
      data: null,
      message,
      code
    }
  },
  STATUS
)
