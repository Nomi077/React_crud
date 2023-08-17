import React, { useReducer } from "react";
const reducer = (state, action) => {
  if (action.type === "increment") {
    return state + 1;
  }
  if (action.type === "decrement") {
    return state - 1;
  }
  return state;
};

const Counter = (props) => {
  const [state, dispatch] = useReducer(reducer, props.initial_val);

  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>
        Increment{" "}
      </button>
      <br />
      <h1>{state}</h1>
      <br />
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
};

export default Counter;
