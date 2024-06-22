// import React, { Component } from 'react'

// export default class Home extends Component {
//   render() {
//     return (
//       <>
//       <h1>Hello , My name is  {this.props.name} , my age is {this.props.age}</h1>
//       </>
//     )
//   }
// }

// function Home(props) {
//   return(
//     <>
//     <h1>Hello Function Component Props</h1>
//     <h3>My name is {props.name}</h3>
//     </>
//   )
// }

// function Home(x) {
//   return(
//     <>
//     <h1>Hello Function Component Props</h1>
//     <h3>My name is {x.name} , my age {x.age}</h3>
//     </>
//   )
// }

// props in function : 

function Home( {name,age} ) {
  return(
    <>
    <h1>Hello Function Component Props</h1>
    <h3>My name is {name} , my age {age}</h3>
    </>
  )
}

export default Home



