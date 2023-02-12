import React, { Component } from 'react'
import Cat from './components/Cat'
import Mouse from './components/Mouse'
import Demo from './components/Demo'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>猫抓老鼠</h1>
        <Demo render={(state) => {
          return <Cat {...state}></Cat>
        }}></Demo>
        <Demo render={(state) => {
          return <Mouse {...state}></Mouse>
        }}></Demo>
      </div>
    )
  }
}
