/*
 * @Author: Zed.wu
 * @Date: 2022-05-09 11:36:36
 * @LastEditors: Zed.Wu
 * @LastEditTime: 2022-05-12 10:05:25
 */
type MyExclude<T, U> = T extends U ? never : T
