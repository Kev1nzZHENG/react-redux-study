import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// 引入store
import store from './redux/store'

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App />)

// 检测redux状态的变化，变化就调用回调中的函数
store.subscribe(() => {
    root.render(<App />)
})
