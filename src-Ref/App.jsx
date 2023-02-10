import React, { Component } from 'react'
import Form from './Form'
// 创建ref对象
let ref = React.createRef()
export default class App extends Component {
  state = {
    count: 0
  }
  render() {
    return (
      <React.Fragment>
        <h1 ref={ref}>标题</h1>
        {/* 将ref传到Form组件中 */}
        <Form ref={ref} xxx={'hello'}></Form>
        <button onClick={() => {
          console.log('打印ref对象', ref)
          let formData = new FormData(ref.current)
          console.log(formData.get('username'))
          console.log(formData.get('password'))
        }}>父组件按钮</button>
      </React.Fragment>
    )
  }

}
