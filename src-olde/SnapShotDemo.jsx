import React, { Component } from "react";

export default class SnapShotDemo extends Component {
  state = {
    message: []
  }

  componentDidMount() {
    const arr = []
    this.timeId = setInterval(() => {
      if (arr.length >= 20) {
        return clearInterval(this.timeId)

      }
      arr.push('我是大帅哥' + arr.length)
      this.setState({
        message: arr
      })
    }, 1000)
  }

  render() {
    let { message } = this.state
    return (
      <div>
        <ul ref={(node) => { this.rootNode = node }}>
          {
            message.map((item) => {
              return <li key={item}>{item}</li>
            })
          }
        </ul>
      </div>
    )
  }
}