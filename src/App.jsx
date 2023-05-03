import React from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Guard from './components/Guard'
import Create from './pages/Create'
import Profile from './pages/Profile'
import Edit from './pages/Edit'
import Detail from './pages/Detail'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/register' element={ <Register /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/' element={ <Guard> <Dashboard /> </Guard> } />
        <Route path='/create' element={ <Guard> <Create /> </Guard> } />
        <Route path='/profile' element={ <Guard> <Profile /> </Guard> } />
        <Route path='/edit/:id' element={ <Guard> <Edit /> </Guard> } />
        <Route path='/detail/:id' element={ <Guard> <Detail /> </Guard> } />
      </Routes>
    </>
  )
}

export default App