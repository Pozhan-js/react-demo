import React, { Component } from 'react'

export default class Register extends Component {
  render() {
    return (
      <div>
        <h1>注册</h1>
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
          验证密码:
          <input
            type='password'
            value={this.props.state.respassword}
            onChange={this.props.handleChange('respassword')}
          />
          <br />
          <input type='button' value='登录' />
        </form>
      </div>
    )
  }

}
