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
            value={this.props.username}
            onChange={this.props.handleChange('username')}
          />
          <br />
          密码:
          <input
            type='password'
            value={this.props.password}
            onChange={this.props.handleChange('password')}
          />
          <br />
          验证密码:
          <input
            type='password'
            value={this.props.respassword}
            onChange={this.props.handleChange('respassword')}
          />
          <br />
          <input type='button' value='注册' />
        </form>
      </div>
    )
  }

}
