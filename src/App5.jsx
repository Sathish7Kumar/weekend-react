import React, { createContext, useEffect, useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ShoppingHome from './Shopping/ShoppingHome'
import Products from './Shopping/Products'
import ShoppingCart from './Shopping/ShoppingCart'
import Navbar from './Shopping/Navbar'
import './App.css'
import axios from 'axios'
import Men from './Shopping/Category/Men'
import Women from './Shopping/Category/Women'
import Jewelery from './Shopping/Category/Jewelery'
import Electronics from './Shopping/Category/Electronics'

//export -> createContext  -> name -> provide -> useContext

export const Shopping = createContext()
 
const App5 = () => {

    const [products, setproducts] = useState([])
    const [cart, setcart] = useState([])
    const [cartValue, setcartValue] = useState(cart.length)

    
    const getProducts = async () =>{
        try {
            const response = await axios.get("https://fakestoreapi.com/products")
            setproducts(response.data); 
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getProducts()
    },[])

    
  return (
    <Shopping.Provider value={{products,setproducts,cart,setcart,cartValue,setcartValue}}>
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path='/' element={<ShoppingHome />} />
        <Route path='/allproducts' element={<Products />} />
        <Route path='/mens' element={<Men />} />
        <Route path='/womens' element={<Women />} />
        <Route path='/jewelery' element={<Jewelery />} />
        <Route path='/electronics' element={<Electronics />} />
        <Route path='/cart' element={<ShoppingCart />} />
    </Routes>
    </BrowserRouter>
    </Shopping.Provider>
  )
}

export default App5