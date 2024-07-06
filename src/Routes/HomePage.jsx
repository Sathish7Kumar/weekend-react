import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = ({foodData}) => {
  // console.log(foodData);
  return (
   <>
   <div className='home-container'>
      {/* {foodData.map((item,index)=>{
        return(
          <div key={index}>
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} height={200} width={200} />
          </div>
        )
      })} */}
      <div>
        <Link className='home-link' to='/pizza'>
        <h2>{foodData[0].name}</h2>
        <img src={foodData[0].image} alt={foodData[0].name} height={200} width={200} />
        </Link>
      </div>

      <div>
        <Link className='home-link' to='/burger'>
        <h2>{foodData[1].name}</h2>
        <img src={foodData[1].image} alt={foodData[1].name} height={200} width={200} />
        </Link>
      </div>
   </div>
   </>
  )
}

export default HomePage

