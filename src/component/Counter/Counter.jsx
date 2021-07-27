import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/action";
import "./Counter.css";

const Counter = () => {
  const dispatch = useDispatch();
  return (
    <div className="counter">
      <p>Manipulation Your Number : </p>
      <button onClick={() => dispatch(decrement(3))}>-</button>
      <button onClick={() => dispatch(increment(3))}>+</button>
    </div>
  );
};

export default Counter;
