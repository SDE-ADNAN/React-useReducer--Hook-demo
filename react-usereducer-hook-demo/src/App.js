import './App.css';
import {useReducer, useState} from 'react'

const initialState = 0;

const reducer = (state,action)=>{
      switch (action.type) {
        case "INCREMENT":
          return state + 1;
          break;
        case "DECREMENT" :
          return state - 1;
          break;
        default:
          return state;
          break;
      }
}

function App() {
  //useReducer is similler to the useState hook 
  //here below the useReducer hook takes a reducer function and initialState as args 
  // and provides (by array destructuring) the mutable state variable and the dispatch function to mutate the state 
  //the dispatch is same as the setState2 function of the useState hook
  //the reducer here is the action making function which takes the prevState and the action type to distinguish between the 
  // different operations while trigerring any specific action known to the reducer...
  const [state,dispatch]=useReducer(reducer,initialState);
  const [state2,setState2]=useState(0);
  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={()=>{dispatch({type:"INCREMENT"})}}>INCREMENT</button>
      <button onClick={()=>{dispatch({type:"DECREMENT"})}}>DECREMENT</button>
    </div>
  );
}

export default App;
