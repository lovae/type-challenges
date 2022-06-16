/*
 * @Author: Zed.wu
 * @Date: 2022-05-09 11:36:36
 * @LastEditors: Zed.Wu
 * @LastEditTime: 2022-05-10 18:42:18
 */

// type First<T extends any[]> =T extends [infer First, ...infer Rest]? First: never

// type First<T extends any[]> =T[0] extends T[number]? T[0] : never

// type First<T extends any[]> =T['length'] extends 0? never : T[0]

// type First<T extends any[]> =T[number] extends never? never : T[0]

type First<T extends any[]> =T extends []? never : T[0]
