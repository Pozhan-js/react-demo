import React from 'react'
import PubSub from 'pubsub-js'
import './Header.css'
export default function Header() {
  function handle(e) {
    if (e.keyCode !== 13) return
    const todoName = e.target.value.trim()
    // 发布数据
    if (!todoName) return
    PubSub.publish('todoName', todoName)
    e.target.value = ''
  }

  return (
    <div className="todo-header">
      <input type="text" onKeyDown={handle} />
    </div>
  )
}
