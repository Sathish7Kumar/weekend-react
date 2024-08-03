import React, { useContext } from 'react'
import { Shopping } from '../../App5'

const Men = () => {
    const context = useContext(Shopping)

    const filterProduct = context.products.filter((item)=>{
        return item.category == "men's clothing"
    })

  return (
    <div>
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
    </div>
  )
}

export default Men