import React, { Component } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'

export default class App extends Component {
  state = () => {
    return {
      username: '',
      password: '',
      respassword: ''
    }
  }
  handleChange = name => {
    return e => {
      this.setState({
        [name]: e.target.value
      })
    }
  }
  render() {
    return (
      <div>
        <h1>高阶组件</h1>
        <Login state={Object.assign({}, this.state)} handleChange={this.handleChange}></Login>
        <Register state={Object.assign({}, this.state)} handleChange={this.handleChange}></Register>
      </div>
    )
  }
}
