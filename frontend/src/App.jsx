import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import './styles/App.css'
import { useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <NavBar/>
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/profile' element={<Profile />}/>
        </Routes>
      </main>
    </>
  )
}

export default App
