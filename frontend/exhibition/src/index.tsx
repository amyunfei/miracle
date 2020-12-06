import React from 'react'
import ReactDOM from 'react-dom'
// reset css
import 'normalize.css'
import './index.css'

// index page
import Index from './views/index'

// 性能检查
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
