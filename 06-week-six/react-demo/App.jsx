import React from "react";

const globalUserName = "El Franko";

export default function App() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <p>How are ya doing, I'm {globalUserName}s page. Great!</p>
      <p>Cannot wait to get more reacty</p>
      <SecondBit />
      <JustAButton />
      <p>
        I'm about to call the second function, one more time, within a p tag:
        <SecondBit />
      </p>
      <JustAButton />
    </div>
  );
}
function SecondBit() {
  let username = "David";
  return (
    <>
      <h3 className="h3-class">
        I'm actually a second function within app.jsx
      </h3>
      <p>and I'm just as cool as my main App guy. Honest. {username} says so</p>
    </>
  );
}

function JustAButton() {
  return <button>Click me! I'm amazing</button>;
}
