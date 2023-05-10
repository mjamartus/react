import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/login'
import Register from './components/register'

function App() {
  return (
    <div className='page'>
      {/* <Login /> */}
      <Register />
    </div>
  )
}

export default App
