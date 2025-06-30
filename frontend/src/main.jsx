import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'     /*we have to import this */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>   {/*we have ton type this and <app/> should come under this start and close tag */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
