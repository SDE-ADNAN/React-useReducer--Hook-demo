import './App.css';
import {useReducer} from 'react'

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
  const [state,dispatch]=useReducer(reducer,initialState);
  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={()=>{dispatch({type:"INCREMENT"})}}>INCREMENT</button>
      <button onClick={()=>{dispatch({type:"DECREMENT"})}}>DECREMENT</button>
    </div>
  );
}

export default App;
