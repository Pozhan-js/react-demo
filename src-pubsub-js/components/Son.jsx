import React, { Component } from 'react'
import { context } from '../context'
import PubSub from 'pubsub-js'

export default class son extends Component {
  static contextType = context
  render() {
    return (
      <div>
        <h3>son组件</h3>
        <div>{this.context}</div>
        <button onClick={() => {
          PubSub.publish('car', ['特斯拉，奥迪'])
        }}>car发布按钮</button>
      </div>
      // <context.Consumer>
      //   {
      //     (data) => {
      //       return <div>
      //         <h3>son组件</h3>
      //         <div>{data}</div>
      //       </div>
      //     }
      //   }
      // </context.Consumer>
    )
  }
}
