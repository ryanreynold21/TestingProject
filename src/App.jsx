import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Guard from './components/Guard'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/register' element={ <Register /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/' element={ <Guard> <Dashboard /> </Guard> } />
      </Routes>
    </>
  )
}

export default App