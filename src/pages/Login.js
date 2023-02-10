import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <div>
        <h1>登录</h1>
        <form>
          用户名:
          <input
            type='text'
            value={this.props.state.username}
            onChange={this.props.handleChange('username')}
          />
          <br />
          密码:
          <input
            type='password'
            value={this.props.state.password}
            onChange={this.props.handleChange('password')}
          />
          <br />
          <input type='button' value='登录' />
        </form>
      </div>
    )
  }
}
