import React from "react";
import { useDispatch } from "react-redux";
import { user } from "../../redux/action";
import "./User.css";

const User = () => {
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <h1>React Redux With React Persist</h1>
      <span>Input Your Name</span>
      <input type="text" onChange={(e) => dispatch(user(e.target.value))} />
    </React.Fragment>
  );
};

export default User;
