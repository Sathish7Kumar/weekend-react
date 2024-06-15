import React from 'react'
import Home from './pages/Home';
import Mobile from './pages/Mobile';
import './App.css';
import StateClass from './pages/StateClass';
import FunctionState from './pages/FunctionState';
import Lifecycle from './pages/Lifecycle';
import Effect from './pages/Effect';
import Vote from './pages/Vote';

class App extends React.Component{
  render(){
    return(
      <>
      <h1>Hello React - Class Component</h1>
      <Home name="MS DHONI" age="25"/>
      <Mobile mName = "One Plus"/>
      <StateClass/>
      <FunctionState/>
      <Lifecycle/>
      <Effect/>
      <Vote/>
      </>
    )
  }
}

export default App;



// props => properties => class , function 

// state , Lifecycle - class component 

// (react hooks) => function component - state , lifecycle

// state ->func -> useState()
// lifecycle -> func -> useEffect()

