/*
 * @Author: Zed.wu
 * @Date: 2022-05-09 11:36:36
 * @LastEditors: Zed.Wu
 * @LastEditTime: 2022-05-09 13:56:33
 */
import type { Equal, Expect } from '@type-challenges/utils'
type MyPick<T, K extends keyof T> = {
  [Key in K]: T[Key]
}

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}
