import React, { Component } from 'react'
import ReactDOM from "react-dom";

export default class Form extends Component {
  constructor() {
    super()
    this.container = document.createElement('div')
  }
  // static 是定义在类上 可以通过 类名.xxx的方式获取
  render() {
    let node = <div>
      用户名：<input type="text" name='username' />
      密码：<input type="password" name='password' />
    </div>

    // 将jsx解构放进创建的div中
    return (
      ReactDOM.createPortal(node, this.container)

    )
  }
  // 在组建挂载时将portal结构渲染到指定dom
  componentDidMount() {
    document.querySelector('#model').appendChild(this.container)
  }
  // 组件卸载时 删除结构
  componentWillUnmount() {
    document.querySelector('#model').removeChild(this.container)
  }
}
