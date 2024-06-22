// props - drilling

// import React, { useState } from 'react'
// import Homepage1 from './components/Homepage1'

// const App2 = () => {
//   const [name, setname] = useState("MS DHONI")
//   return (
//     <>
//     <h1>APP</h1>
//     <Homepage1 name={name}/>
//     </>
//   )
// }

// export default App2

// use context ->

// app - global creating context (export) -> provide (value attribute - {})
// c1 , c2 , c3- useContext()

// useContext

// import React, { createContext, useState } from 'react'
// import Homepage1 from './components/Homepage1'

// export const NameContext = createContext()

// const App2 = () => {
//   const [name, setname] = useState("MS DHONI")
//   const [age, setage] = useState(42)
//   return (
//     <NameContext.Provider value={{name,age}}>
//     <h1>APP</h1>
//     <Homepage1/>
//     </NameContext.Provider>
//   )
// }

// export default App2

//  useReducer + useContext

import React, { createContext, useState } from "react";
import Reducer from "./Reducer/Reducer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./pages/Navigation";
import './App.css'

export const BankContext = createContext()

const App2 = () => {
  const [amount, setamount] = useState(1000)
  return (
    <BankContext.Provider value={amount}>
      <Navigation/>
      <Reducer />
    </BankContext.Provider>
  );
};

export default App2;
