import "./css/App.css";
import { useSelector, useDispatch } from "react-redux";
import {increment, decrement } from "./actions/index";

function App() {

  // Getting state value from redux store
  const counter = useSelector((state) => state.incDec);

  // Calling dispatch
  const dispatch =useDispatch();

  return (
    <div className="container">
      <div className="title">Redux Example</div>
      <div className="counter">{counter}</div>
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
