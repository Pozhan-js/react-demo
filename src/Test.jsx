import React, { Component } from 'react'

export default class Test extends Component {

  state = {
    message: 'hello'
  }
  // 第二个参数接收的实例上的state 这里还没有定义
  shouldComponentUpdate(nextProps, nextState) {

    // nextProps, nextState 这两个参数接受的时最新的数据 this.props 和 this.state接收的是之前的数据
    console.log(this.props)
    // console.log('test组件更新')
    // 当返回 false null 0 时组件不更新 如果 返回的时undefined 那么会哦报错 因为要返回一个boolean值
    return nextProps.count !== this.props.count || nextState.message !== this.state.message
  }

  render() {
    console.log('test组件更新')
    return (
      <div>
        test组件
        <span>{this.props.count}</span>
        <button onClick={() => {
          this.setState({
            message: 'hello world',
          })
        }}>修改数据</button>
      </div>
    )
  }
}
