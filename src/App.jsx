import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Outlet></Outlet>
      <Toaster />
    </div>
  )
}

export default App
