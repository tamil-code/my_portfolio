import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { ThemeProvider } from '@mui/material'
import theme from './theme/theme'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     <ThemeProvider theme={theme}>
     <App />
     </ThemeProvider>
    </BrowserRouter>
    ,
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
