import React, { Component } from 'react'
import Far from './components/Far'
import { context } from './context'

export default class App extends Component {
  state = {
    message: '一百万'
  }

  render() {
    return (
      <context.Provider value={this.state.message}>
        <Far></Far>
      </context.Provider>
    )
  }
}
