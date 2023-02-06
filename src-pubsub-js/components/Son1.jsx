import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class Son1 extends Component {
  render() {
    return (
      <div>
        <div>Son组件</div>
        <button onClick={() => {
          PubSub.publish('百度', '我是百度好大儿')
        }}> son 发布按钮</button>
      </div>
    )
  }
}
