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
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
