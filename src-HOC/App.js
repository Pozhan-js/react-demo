import React, { Component } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import withDemo from './pages/Demo'

let WithLogin = withDemo(Login)
let WithRegister = withDemo(Register)

export default class App extends Component {

  render() {
    return (
      <div>
        <h1>高阶组件</h1>
        <WithLogin></WithLogin>
        <WithRegister></WithRegister>
      </div>
    )
  }
}
