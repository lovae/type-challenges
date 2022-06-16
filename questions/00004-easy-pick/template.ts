/*
 * @Author: Zed.wu
 * @Date: 2022-05-09 11:36:36
 * @LastEditors: Zed.Wu
 * @LastEditTime: 2022-05-10 18:07:14
 */
type MyPick<T, K extends keyof T> = {
  [Key in K]: T[Key]
}
