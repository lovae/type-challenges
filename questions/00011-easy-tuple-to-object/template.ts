/*
 * @Author: Zed.wu
 * @Date: 2022-05-09 11:36:36
 * @LastEditors: Zed.Wu
 * @LastEditTime: 2022-05-10 18:15:33
 */
type TupleToObject<T extends readonly string[]> = {
  [K in T[number]]: K
}
