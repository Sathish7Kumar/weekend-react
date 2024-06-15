import React, { useEffect, useState } from 'react'
const Effect = () => {
    const [increment, setincrement] = useState(0)
    const [decrement, setdecrement] = useState(10)
    //1
    // useEffect(()=>{
    //     console.log("Use Effect Called - Updated Re-rendered");
    // })
    //2
    // useEffect( ()=>{
    //     console.log("Use Effect Called - Updated Re-rendered");
    // } , [] )
    //3
    useEffect( ()=>{
        console.log("Use Effect Called - Updated Re-rendered");
    } ,[decrement] )
    console.log("Render");
return (
    <>
    <h1>Use Effect Hook</h1>
    <h3>Increment Value : {increment} </h3>
    <button onClick={()=>setincrement(increment+1)}>Increment</button>
    <h3>Decrement Value : {decrement}</h3>
    <button onClick={()=>setdecrement(decrement-1)}>Decrement</button>
    </>
  )
}

export default Effect