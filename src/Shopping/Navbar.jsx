import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Shopping } from '../App5'
import { MdShoppingCart } from "react-icons/md";

const Navbar = () => {
   const context =  useContext(Shopping)
   // context = {products,setproducts,cart,setcart,cartValue,setcartValue}
  return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/allproducts'>Products</Link></li>
                <li><Link to='/cart'>
                <MdShoppingCart style={{color:"white",fontSize:"30px",marginBottom:"5px"}} />
                Cart : {context.cartValue} </Link></li>
            </ul>
        </nav>
  )
}

export default Navbar