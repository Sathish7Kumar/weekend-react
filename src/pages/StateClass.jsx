import React, { Component } from 'react'
export default class StateClass extends Component {
    state = {
        count: 0 // 3 , 2 , 1 , 0
    }
    handleAdd = () => {
        this.setState({
            count: this.state.count + 1 // 0 -1 -2 -3 
        })
    }
    handleDecrement = () =>{

        // this.setState( (prevState) =>  {  // prevState = this.state
        //     if(prevState.count > 0){  // 3 > 0 , 2 > 0 , 1 > 0 , 0>0
        //      return {
        //         count :  this.state.count - 1 
        //             } // 3 - 1 = 2 , 1 , 0
        //     }
        // })

        this.setState((prevState)=>({  // 3 , 2 , 1
            count : Math.max(prevState.count -1 , 0 ) //  (2,0)  (1,0)  (0,0) (-1,0)
        }))

    }
    render() {
        return (
            <>
                <h1>Count : {this.state.count} </h1>
                <button onClick={this.handleAdd}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
            </>
        )
    }
}
