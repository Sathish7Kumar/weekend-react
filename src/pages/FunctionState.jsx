import React, { useState } from 'react'
const FunctionState = () => {
    const [count,setcount]  = useState(0)
    const [name, setname] = useState("Sathish")
    // console.log(count);
    // const handleIncrement = () =>{
    //     setcount(count+1)
    // }
    // const handleDec = () =>{
    //     if(count>0){
    //         setcount(count-1)
    //     }
    // }

    // const handleName= () =>{setname("MS Dhoni")}

    // console.log("Re-Render");

  return (
    <>
    <h1>USE State Hooks</h1>
    <h2>Count : {count}</h2>
    {/* <button onClick={handleIncrement}>Increment</button> */}
    <button onClick={()=>setcount(count+1)}>Add</button>
    {/* <button onClick={handleDec}>Decrement</button> */}
    <button onClick={() =>{if(count>0){setcount(count-1)}}}>Decrement</button>

    <hr />

    <h2>My name is {name}</h2>
    <button onClick={() =>{setname("MS Dhoni")}}>Change Name</button>
    </>
  )
}
export default FunctionState


// react hooks => state => useState()