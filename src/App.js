import "./css/App.css";
import { useSelector, useDispatch } from "react-redux";
import {increment, decrement, thunkFunctionActionCreator } from "./actions/index";
import store from "./store/store";

function App() {

  // Getting state value from redux store
  const counter = useSelector((state) => state.incDec);

  //store.getState
  // console.log(store.getState());
  // store.subscribe(function(){
  //   console.log(store.getState())
  // })

  // Calling dispatch
  const dispatch =useDispatch();

  return (
    <div className="container">
      <div className="title">Redux Example</div>
      <div className="counter">{console.log(counter)}</div>
      <div className="btn-container">
        <button className="btn1" onClick={() =>{dispatch(increment())}}>
          +
        </button>
        <button className="btn2" onClick={() =>{dispatch(decrement())}}>
          -
        </button>
      </div>
    </div>
  );
}

export default App;
