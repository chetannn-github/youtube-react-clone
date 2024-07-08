import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { router } from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import appStore from './utils/reduxStore/appStore.js';
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><Provider store={appStore}>
    <RouterProvider router={router}>
    
    <App /></RouterProvider>
    </Provider>
  </React.StrictMode>,
)
