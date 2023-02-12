import React from 'react'
import PubSub from 'pubsub-js'

import './Item.css'
export default function Item(props) {

  function handle() {
    PubSub.publish('todo', props.user.id)
  }

  return (
    <li>
      <label>
        <input type="checkbox" checked={props.user.isDone} onChange={handle} />
        <span className={props.user.isDone ? 'active' : ''}>{props.user.todoName}</span>
      </label>
      <button className="btn btn-danger">删除</button>
    </li>
  )
}
