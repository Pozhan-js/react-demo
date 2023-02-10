import React, { Component } from 'react'
import Test from './Test'

export default class App extends Component {
  state = {
    count: 0
  }

  // shouldComponentUpdate() {
  //   console.log('App组件更新')
  // }
  // 将函数挂载到原型上
  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值
  }

  render() {
    console.log('App组件更新')
    return (
      <React.Fragment>
        <div>{this.state.count}</div>
        <button onClick={() => {
          this.setState({ count: this.getRandomIntInclusive(0, 1) })
        }}>+1</button>
        <Test count={this.state.count}></Test>
      </React.Fragment>
    )
  }
}
