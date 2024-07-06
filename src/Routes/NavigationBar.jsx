import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = ({cartData}) => {
  return (
    <>
    <nav>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/food'>Food</Link></li>
            <li><Link to='/pizza'>Pizza</Link></li>
            <li><Link to='/burger'>Burger</Link></li>
            <li><Link to='/cart'>Cart : {cartData.length}</Link></li>
        </ul>
    </nav>
    </>
  )
}

export default NavigationBar