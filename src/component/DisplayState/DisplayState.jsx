import React from "react";
import { useSelector } from "react-redux";

const DisplayState = () => {
  const user = useSelector((state) => state.user);
  const number = useSelector((state) => state.counter);
  return (
    <React.Fragment>
      <span>
        Your Manipulation will be show here <br />
      </span>
      <span>Your Name = {user}</span>
      <span>Your Number = {number}</span>
    </React.Fragment>
  );
};

export default DisplayState;
