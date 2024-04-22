import React from "react";

export default function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>How are ya doing, I'm Frankies page. Great!</p>
      <p>Cannot wait to get more reacty</p>
      <SecondBit />
      <p>
        I'm about to call the second function, one more time, within a p tag:
        <SecondBit />
      </p>
    </div>
  );
}
export function SecondBit() {
  return (
    <div>
      <h3>I'm actually a second function within app.jsx</h3>
      <p>and I'm just as cool as my main App guy. Honest.</p>
    </div>
  );
}
