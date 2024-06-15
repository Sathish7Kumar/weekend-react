import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor(){
        super()
        this.state = {
            count: 0 // 3 , 2 , 1 , 0
        }
        console.log("Component Constucted");
    }

    componentDidMount(){
        console.log("Component Mounted");
    }

    componentDidUpdate(){
        console.log("Component Updated & Re-Render");
    }

    // componentWillUnmount(){
    //     console.log("Component Un-Mounted");
    // }
    
    handleAdd = () => {
        this.setState({
            count: this.state.count + 1 // 0 -1 -2 -3 
        })
    }
    handleDecrement = () =>{
        this.setState( (prevState) =>  {  // prevState = this.state
            if(prevState.count > 0){  // 3 > 0 , 2 > 0 , 1 > 0 , 0>0
             return {
                count :  this.state.count - 1 
                    } // 3 - 1 = 2 , 1 , 0
            }
        })
    }

  render() {
    console.log("Render");
    return (
      <>
      <h1>LifeCycle</h1>
      <h1>Count : {this.state.count} </h1>
        <button onClick={this.handleAdd}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </>
    )
  }
}

// lifecycle - b child () adult older d





