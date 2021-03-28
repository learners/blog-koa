import Joi from 'joi'
import type { App } from '@/types'
import { errorModel } from '@/common/model'
import { defaultMessages } from '@/utils/joi'

const username = Joi.string()
                    .trim()
                    .required()
                    .pattern(/^[a-zA-Z\d]{5,20}$/)
                    .message('账号校验失败')

const password = Joi.string()
                    .trim()
                    .required()
                    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*_]{5,20}$/)
                    .message('密码校验失败')

export default {
  signin: (ctx: App.Context, next: App.Next) => {
    const schema = Joi.object({
      username,
      password
    })
    const { value, error } = schema.messages(defaultMessages).validate(ctx.query)
    if (error) {
      ctx.body = errorModel(error.details[0].message, 400)
    } else {
      ctx.query = value
      return next()
    }
  },
  signup: (ctx: App.Context, next: App.Next) => {
    const schema = Joi.object({
      username,
      password
    })
    const { value, error } = schema.messages(defaultMessages).validate(ctx.query)
    if (error) {
      ctx.body = errorModel(error.details[0].message, 400)
    } else {
      ctx.query = value
      return next()
    }
  }
}
