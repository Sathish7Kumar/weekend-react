import React from 'react'

const Food = ({foodData,addCart}) => {
  return (
    <>
    <div>
      {foodData.map((item,index)=>{
        return (
          <div key={index}>
            <h2>{item.subItemsData.name}</h2>
            <div>
              {item.subItemsData.subItems.map((subItem,index)=>{
                return(
                  <div key={index}>
                    <h3>{subItem.name}</h3>
                    <img src={subItem.image} alt={subItem.name} height={200} width={200} />
                    <h4>Decription : {subItem.description}</h4>
                    <h4>Price : Rs {subItem.price}.00</h4>
                    <button onClick={()=>addCart(subItem)}>Add to Cart</button>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Food