import React, { useState, useEffect } from 'react'

export default function Test(props) {
  const [num, setNum] = useState(0)

  //函数有两个参数，第一个参数是 函数 模仿组件挂在和更新 函数的返回值也是一个函数 返回函数内部模仿组件卸载
  // useEffect 第二个参数 是个数组 那么函数的第一个参数 模仿的就只是组件的挂载
  // useEffect 第二个参数 表示的是依赖参数 当数组中的值发生改变时 才会执行

  // 他的作用是 更新state的值 并且通知视图更新
  useEffect(() => {
    console.log('Test组件挂载/更新');
    return () => {
      console.log('组件卸载');
    }
  }, [props])
  function handler() {
    setNum(num + 1)
  }

  return (
    <div>
      <button onClick={handler}>Test组件按钮</button>
    </div>
  )
}
