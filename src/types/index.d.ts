// import * as Koa from 'koa'
import Koa = require('koa')
import Controllers from '@/controllers'

// 将 KebabCase 转为 CamelCase 命名
export type CamelCase<S extends string> = S extends `${infer S1}${infer S2}` ? `${Uncapitalize<S1>}${S2}` : S
// 将类的 Map 对象转为实例的 Map 对象
export type Instances<T> = {
  // 将键名转为驼峰命名
  [K in keyof T as CamelCase<string &K>]: InstanceType<T[K]>
}

export declare class App extends Koa {
  controllers: Instances<typeof Controllers>
}
export namespace App {
  // 导出 Koa 的命名空间
  export = Koa
}
