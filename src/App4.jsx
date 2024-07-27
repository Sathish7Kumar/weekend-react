import React, { useEffect, useState } from "react";
import axios from "axios";

const App4 = () => {
  const [product, setproduct] = useState([]);

  // method : 1 - fetch

  // view  only console

  //fetch(api)- promise return - then catch block
  //then1 -> resp -> json
  //then2 -> data -> console.log(data)
  // catch -> err -> console.log(err)

  // setting product with unwanted re-render - fetching inside use effect

  //   useEffect(()=>{
  //     fetch("https://fakestoreapi.com/products")
  //   .then(resp => resp.json())
  //   .then(data => setproduct(data))
  //   .catch(err => console.log(err))
  //   },[])

  // method 2 :  - promise _

  // func declr ,
  // promise create,
  //fetch(api)- promise return - then catch block
  //then1 -> resp -> json
  //then2 -> data -> resolve
  // catch -> err -> reject
  // func call -> promise inside fun call -> then catch block
  // resolved data -> console.log
  // if failure rejected reason err -> console.log

  //   function getData() {
  //     return new Promise((res, rej) => {
  //       fetch("https://fakestoreapi.com/products")
  //         .then((resp) => resp.json())
  //         .then((data) => res(data))
  //         .catch((err) => rej(err));
  //     });
  //   }
  // view op in console
  //   getData()
  //   .then(data => console.log(data))
  //   .catch(err=> console.log(err) )

  // setting product with unwanted re-render - calling inside use effect
  //   useEffect(() => {
  //     getData()
  //       .then((data) => setproduct(data))
  //       .catch((err) => console.log(err));
  //   }, []);

  // method 3 : async func

  //    const getResp = async  () =>{
  //     try {
  //         const resp = await  fetch("https://fakestoreapi.com/products")
  //         const data = resp.json()
  //         return data;
  //     } catch (error) {
  //         console.log(error);
  //     }
  //    }
  //    async function getData(){
  //     try {
  //         const myData = await getResp()
  //         console.log(data)
  //         setproduct(myData); // [{},{}]
  //     }
  //     catch (error) {
  //         console.log(error);
  //     }
  //    }
  //  getData()  // view o/p in console

  //setting product with unwanted re-render - calling inside use effect
  //    useEffect(()=>{
  //     // getData()
  //    },[])

  //   method 4 :
  // axios -> 3rd party dependency
  // crud/cred - C-create(post),R-read(get),U-update(put)/E-edit(put),D-delete(delete)

  const getProduct = async() =>{
    try {
        const resp = await axios.get("https://fakestoreapi.com/products")
        // console.log(resp.data);
        setproduct(resp.data)
         // obj return -> inside that obj having data key
         // that data contains all the resp json (array of objs)
    } catch (error) {
        console.log(error);
    }
  } 
  useEffect(()=>{
    getProduct()
  },[])


  console.log(product);

  return (
    <>
      <div>{JSON.stringify(product)}</div>
    </>
  );
};

export default App4;

// js :

// ternary operator 
// function -> callback func , arrow func
// func with arguments and parameter passing 
// fetch , promise , async func
// obj 
// array (all methods)-map filter findIndex reduce forEach pop unshift find slice includes

// react - 

// props , state 
// props drilling
// use state , useEffect , useContext
// react-router-dom
// axios 
// conditional rendering
// event handling (onclick)
