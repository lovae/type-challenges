/*
 * @Author: Zed.wu
 * @Date: 2022-05-09 11:36:36
 * @LastEditors: Zed.Wu
 * @LastEditTime: 2022-05-10 18:08:43
 */
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}

interface Todo{
  a: string
  b: number
}
type t = keyof Todo
const r: t = 'a'
const v: t = 'b'
// in -> mapped
// keyof -> lookup
// 取值 -> indexed
