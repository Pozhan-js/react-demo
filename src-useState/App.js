import React, { useState } from 'react'

export default function App() {
  console.log('函数重新进行');
  const [count, setCount] = useState(0)

  function handler() {
    setCount(count + 1)
    // console.log(count);
  }

  return (
    <div>
      {count}
      <button onClick={handler}>添加{count}</button>
    </div>
  )
}
