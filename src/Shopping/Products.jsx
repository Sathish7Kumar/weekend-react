import React, { useContext, useState } from 'react'
import { Shopping } from '../App5'

const Products = () => {
    const [inputValue, setinputValue] = useState("")
   const context =  useContext(Shopping)
// context = {products,setproducts,cart,setcart,cartValue,setcartValue}
// context.products =  20 products => [{},{},{},.....]
    const filterProduct = context.products.filter((item)=>{
        return item.title.toLowerCase().includes(inputValue.toLowerCase())
    })
  return (
    <div>
        <div>
            <input type="text" value={inputValue} onChange={(e)=>setinputValue(e.target.value)}  placeholder='Search....' />
        </div>
        {filterProduct.length > 0 ? 
        <>
        {filterProduct.map((item,index)=>{
            return(
                    <div key={index}>
                        <h1>{item.title}</h1>
                        <img src={item.image} alt={item.title} height={150} width={150} />
                        <p>{item.description}</p>
                        <h2> Price : $-{item.price}</h2>
                        <h4>Available Count : {item.rating.count}</h4>
                        <h4>Rating : {item.rating.rate}</h4>
                        <button onClick={()=>{
                            context.cart.push(item);
                            context.setcartValue(context.cart.length)
                        }} className='btn btn-success'>Add to Bag</button>
                </div>
            )
        })}
        </> 
        : 
        <>
        <h2>Sorry ! ... No products found your search criteria</h2>
        </>
        }
    </div>
  )
}

export default Products