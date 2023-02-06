import React, { Component } from 'react'
import Son from './Son'
import Son1 from './Son1'
import PubSub from 'pubsub-js'

export default class Far extends Component {

  componentDidMount() {
    // 当组件挂在时订阅
    this.subId = PubSub.subscribe('百度', (topic, data) => {
      console.log('Far组件订阅数据', data)
    })

    // 订阅car
    this.subIdCar = PubSub.subscribe('car', (topic, data) => {
      console.log('car订阅数据', data)
    })
  }

  render() {
    return (
      <div>
        <div>Far组件</div>
        <Son></Son>
        <Son1></Son1>
        <button onClick={() => {
          PubSub.unsubscribe(this.subId)
        }}>清除Far百度订阅</button>
        <button onClick={() => {
          PubSub.unsubscribe(this.subIdCar)
          // 删除全部
          // PubSub.clearAllSubscriptions
        }}>清除car百度订阅</button>
      </div>
    )
  }
}
