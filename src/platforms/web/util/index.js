/* @flow */

import { warn } from 'core/util/index'

export * from './attrs'
export * from './class'
export * from './element'

/**
 * Query an element selector if it's not an element already.
 */
export function query (el: string | Element): Element {
  // 判断el是否为字符串
  if (typeof el === 'string') {
    // 通过el查找dom元素
    const selected = document.querySelector(el)
    // 找不到时：警告，返回一个div dom
    if (!selected) {
      process.env.NODE_ENV !== 'production' && warn(
        'Cannot find element: ' + el
      )
      return document.createElement('div')
    }
    return selected
  } else {
    //  el为一个dom对象
    return el
  }
}
