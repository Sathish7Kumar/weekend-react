import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './Routes/HomePage'
import ContactPage from './Routes/ContactPage'
import AboutPage from './Routes/AboutPage'
import NavigationBar from './Routes/NavigationBar'

const App3 = () => {
  return (
    <>
    <BrowserRouter>
    <NavigationBar/>
    <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/about' element={<AboutPage/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App3