import "./styles.css";
import { useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  // function reducer(state,action){
  //   switch(action.type){
  //     case 'inc':
  //       return state+1;
  //       case 'dec':
  //         return state-1;
  //         default:
  //           return 0;
  //   }
  // }
  const count = 0;
  // const [state,dispatch]= useReducer(reducer,count);

  return (
    <div className="App">
      <h1>{}</h1>
      <button>INC</button>
      <button> DEC</button>
    </div>
  );
}
