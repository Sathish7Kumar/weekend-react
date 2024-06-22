import React, { useState } from 'react'

const Vote = () => {
    const [age, setage] = useState()
    const [message, setmessage] = useState("")

    const handleCheck = () => {
       if(age>=18){ // 5>=18
        setmessage("You can eligible to Vote")
       }
       else{
        setmessage("You can not eligible to Vote")
       }
    }
  return (
    <>
    <h1 className="head">Vote Calculator</h1>
    <input type="number" onChange={(e) =>{setage(e.target.value)}}   placeholder='Enter your Age' />
    <h3>Entered Age : {age}</h3>
    <button onClick={handleCheck}>Check</button>
    <h4>Your Result : {message}</h4>
    </>
  )
}

export default Vote