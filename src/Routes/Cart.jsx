import React from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = ({cartData,clearCart,removeCart,calcTotal,setcartData}) => {

  const nav = useNavigate()

  const handleOrder = ()=>{
    alert("Your Order Placed Successfully")
    setcartData([])
    nav('/')
  }

  return (
    <>
    <div>
      {cartData.length > 0 
      ? 
      <>
      <div>
        <button onClick={clearCart}>Clear Cart</button>
        {cartData.map((item,index)=>{
          return(
            <div key={index}>
              <h3>{item.name}</h3>
              <img src={item.image} alt={item.name} height={200} width={200} />
              <h4>Decription : {item.description}</h4>
              <h4>Price : Rs {item.price}.00</h4>
              <button onClick={()=>removeCart(index)}>Remove from Cart</button>
            </div>
          )
        })}
        <h1>Total Amount : {calcTotal()}</h1>
        <button onClick={handleOrder}>Order Now</button>
      </div>
      </>
       : 
      <>
      <h2>Your Cart is Empty</h2>
      </>}
    </div>
    </>
  )
}

export default Cart