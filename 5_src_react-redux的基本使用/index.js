import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// 引入store
import store from './redux/store'

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App />)

// 检测redux状态的变化，若redux的状态发生改变，那么重新渲染
store.subscribe(() => {
    root.render(<App />)
})
