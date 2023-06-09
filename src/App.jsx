import React from 'react'
import "./App.css"
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Guard from './components/Guard'
import Create from './pages/Create'
import Profile from './pages/Profile'
import Edit from './pages/Edit'
import Detail from './pages/Detail'
import RootLayout from './Layout/RootLayout'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       <Route index element={ <Guard> <Dashboard /> </Guard> } />
//       <Route path='create' element={ <Guard> <Create /> </Guard> } />
//       <Route path='profile' element={ <Guard> <Profile /> </Guard> } />
//       <Route path='edit/:id' element={ <Guard> <Edit /> </Guard> } />
//       <Route path='detail/:id' element={ <Guard> <Detail /> </Guard> } />
//     </Route>
//   )
// )
{/* <RouterProvider router={router} /> */}


const App = () => {
  return (
    <>
       <Routes>
          <Route path='/login' element={ <Login /> } />
          <Route path='/register' element={ <Register /> } />
          
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