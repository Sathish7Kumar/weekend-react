// props - drilling 

// import React from 'react'

// const Homepage3 = ({name}) => {
//   return (
//     <>
//     <h1>HomePage 3</h1>
//     <h2>I am {name}</h2>
//     </>
//   )
// }

// export default Homepage3

// useContext

import React, { useContext } from 'react'
import { NameContext } from '../App2'

const Homepage3 = () => {
    const details = useContext(NameContext) 
    //const details = {name:MS DHONI, age:42}
  return (
    <>
    <h1>HomePage 3</h1>
    <h2>I am {details.name}, my age is {details.age}</h2>
    </>
  )
}

export default Homepage3

