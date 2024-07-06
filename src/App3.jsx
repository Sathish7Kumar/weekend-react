import React, { useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './Routes/HomePage'
import Food from './Routes/Food'
import Cart from './Routes/Cart'
import NavigationBar from './Routes/NavigationBar'
import Fooddata from './Routes/FoodData'
import Pizza from './Routes/Pizza'
import Burger from './Routes/Burger'
import './App.css'

const App3 = () => {

  const [foodData, setfoodData] = useState([])
  const [cartData, setcartData] = useState([]) // 5

  useEffect(()=>{
    setfoodData(Fooddata)
  },[])

  const addCart = (subItem) =>{
    setcartData((x) => [...x,subItem])
  }

  const removeCart = (index) =>{
    setcartData((cartItems)=> cartItems.filter((item,i)=> i!==index))
  }
  
  const calcTotal = () =>{
    let total = 0
    cartData.forEach(item => total = total + parseInt(item.price))
    return total.toFixed(2)
  }

  const clearCart = () =>{
    setcartData([])
  }

  return (
    <>
    <BrowserRouter>
    <NavigationBar cartData={cartData}/>
    <Routes>
        <Route path='/' element={<HomePage foodData={foodData}/>} />
        <Route path='/food' element={<Food foodData={foodData} addCart={addCart} />} />
        <Route path='/pizza' element={<Pizza foodData={foodData} addCart={addCart} />} />
        <Route path='/burger' element={<Burger foodData={foodData} addCart={addCart} />} />
        <Route path='/cart' element={<Cart cartData={cartData} setcartData={setcartData} clearCart={clearCart} removeCart={removeCart} calcTotal={calcTotal}/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App3


//  const app = [ {} ,  {} ]
// app[0] = {}