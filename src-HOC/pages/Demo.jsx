import React, { Component } from 'react'


export default function withDemo(WrappedComponent) {
  return class extends Component {
    static displayName = 'With' + WrappedComponent.name
    state = {
      username: '',
      password: '',
      respassword: ''
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
          {/* <WrappedComponent
            username={this.state.username}
            password={this.state.password}
            respassword={this.state.respassword}
            handleChange={this.handleChange}></WrappedComponent> */}
          <WrappedComponent
            {...this.state}
            handleChange={this.handleChange}></WrappedComponent>
        </div>
      )
    }
  }
}

