import React, { useContext, useEffect, useState } from 'react'
import { Shopping } from '../App5'
import { Link, useNavigate } from 'react-router-dom'



const ShoppingCart = () => {
    const [total, settotal] = useState(0)
    const context = useContext(Shopping)
    // context = {products,setproducts,cart,setcart,cartValue,setcartValue}
    // context.cart => whatever i added (3) => [{},{},{}]

    const nav = useNavigate()

    const handleClear = () =>{
        context.setcart([])
        context.setcartValue(0)
    }

    useEffect(()=>{
        const newTotal = context.cart.reduce((initailAmount,item)=>{
            return  initailAmount + item.price
        },0)
        settotal(newTotal.toFixed(2));
    },[context.cart])

    const handleRemove = (index) =>{
        const updatedCart = [...context.cart]
        updatedCart.splice(index,1)
        context.setcart(updatedCart)
        context.setcartValue(updatedCart.length)
    }

    const handleBuy = () =>{
        alert("Hi.. Your order is Placed , It will reach now on or before 2 days")
        context.setcart([])
        context.setcartValue(0)
        nav('/')
    }
    

  return (
    <div>
       
        {context.cart.length > 0 ? 
        <>
        <button className='btn btn-warning' onClick={handleClear}>Clear Cart</button>
        <h2>You have Ordered ..!</h2>
        <h1>Total Price : {total} <button onClick={handleBuy} className='btn btn-info'>Buy Now</button> </h1>
        {context.cart.map((item,index)=>{
            return(
                    <div key={index}>
                        <h3>{item.title}</h3>
                        <img src={item.image} alt={item.title} height={150} width={150} />
                        <h2> Price : $-{item.price}</h2>
                        <button onClick={()=>handleRemove(index)} className='btn btn-danger'>Remove from Bag</button>
                </div>
            )
        })}
        </> 
        : 
        <>
        <h2>You Cart is Empty ..!</h2>
        <Link to='/allproducts'>Click to add product</Link>
        </>
        }
    </div>
  )
}

export default ShoppingCart