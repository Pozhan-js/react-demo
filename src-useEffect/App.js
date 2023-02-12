import React, { useState, useEffect } from 'react'
import Test from './Test'

export default function App() {
  // console.log('函数重新进行');
  const [count, setCount] = useState(0)

  useEffect(() => {
    // 当组件开始挂载时 外部函数要执行一次
    // 当组件更新时先执行 内部函数模拟组件卸载 再执行外部函数模拟组件挂载
    // 就好像计时器一样 当计时器叠加时 要先清除先前的计时器

    // console.log('App组件挂载/更新');
    return () => {
      // 先执行卸载函数
      // console.log('App组件卸载');
    }
  })

  function handler() {
    setCount(count + 1)
    // console.log(count);
  }

  return (
    <div>
      {count}
      {count === 1 ? <Test></Test> : ''}
      <button onClick={handler}>添加{count}</button>
    </div>
  )
}
