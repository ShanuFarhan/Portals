import React from 'react'
import NavBar from './component/NavBar'
import { Route,Routes } from 'react-router-dom'
import Teacherportal from './pages/Teacherportal'
import Parentportal from './pages/Parentportal'
import Home from './pages/Home'

const App = () => {
  return (
        <>
       <NavBar/>
       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/teacherportal' element={<Teacherportal/>}/>
          <Route path='/parentportal' element={<Parentportal/>}/>
       </Routes>
        </>
  
  )
}

export default App
