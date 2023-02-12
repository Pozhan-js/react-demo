import React, { useState, useEffect } from 'react'
import PubSub from 'pubsub-js'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import Item from './components/Item/Item'
import './App.css'
export default function App() {
  // 定义状态
  const [list, setList] = useState([
    { id: 1, todoName: '吃饭', isDone: false },
    { id: 2, todoName: '睡觉', isDone: true },
    { id: 3, todoName: '游泳', isDone: false },
  ])

  useEffect(() => {
    // 订阅数据
    const subId = PubSub.subscribe('todoName', (topic, todoName) => {
      const obj = {
        id: Date.now(),
        todoName,
        isDone: false,
      }
      // 接收的是最新的list
      setList((list) => {
        const newList = [...list]
        newList.push(obj)
        return newList
      })
    })

    const update = PubSub.subscribe('todo', (topic, id) => {
      setList((list) => {
        const newList = [...list]
        newList.forEach((item) => {
          if (item.id === id) item.isDone = !item.isDone
        })

        return newList
      })
    })

    return () => {
      // 清除订阅
      PubSub.unsubscribe(subId)
      PubSub.unsubscribe(update)
    }
  }, [])

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header></Header>
        <div>
          <List>
            {
              list.map((item) => {
                return <Item user={item} key={item.id}></Item>
              })
            }
          </List>
          <Footer></Footer>
        </div>
      </div>
    </div>
  )
}
