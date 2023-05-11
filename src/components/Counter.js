import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux-toolkit/valueReducer";
import { getUserData } from "../redux-toolkit/dataInfoReducer";

function Counter() {
  const dispatch = useDispatch();
  const value = useSelector((state) => {
    return state.value;
  });
  console.log(value);
  return (
    <div className="counter" style={{ marginTop: "100px" }}>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <label style={{ fontSize: "30px" }}>{value}</label>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          dispatch({
            type: "logout",
          });
        }}
      >
        Logout
      </button>
      <br />
      <br />
      <br />
      <button
        onClick={() => {
          dispatch(getUserData());
        }}
      >
        Load user data
      </button>
    </div>
  );
}

export default Counter;
