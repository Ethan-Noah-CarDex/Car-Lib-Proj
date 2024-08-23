// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CarProvider from './context/CarProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <CarProvider>
    <App />
  </CarProvider>

)