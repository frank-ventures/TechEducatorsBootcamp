"use client";

import { useReducer } from "react";

function reducer(prevState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...prevState,
        count: prevState.count + 1 + prevState.modifier
      };
    case "DECREMENT":
      return {
        ...prevState,
        count: prevState.count - 1
      };
    case "increaseModifier":
      return {
        ...prevState,
        modifier: prevState.modifier + 1
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export default function Home() {
  const [count, dispatch] = useReducer(reducer, { count: 0, modifier: 1 });

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <div>
        <h3>More Stuff</h3>
        <p>Current modifier: {count.modifier}</p>
        <button onClick={() => dispatch({ type: "increaseModifier" })}>
          Increase multiplier
        </button>
      </div>
    </div>
  );
}
