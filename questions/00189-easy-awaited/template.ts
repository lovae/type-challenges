/*
 * @Author: Zed.wu
 * @Date: 2022-05-09 11:36:36
 * @LastEditors: Zed.Wu
 * @LastEditTime: 2022-05-12 10:20:05
 */
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X> ? X extends Promise<unknown> ? MyAwaited<X> : X : never
