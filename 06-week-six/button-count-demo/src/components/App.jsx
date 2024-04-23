import { useState } from "react";
import TextDisplay from "./TextDisplay.jsx";
import Button from "./Button.jsx";
import "/src/App.css";

// Code now refactored to only need one button component
// import CountButton from "./CountButton";
// import DecreaseButton from "./DecreaseButton";

export default function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  function resetCount() {
    setCount(count - count);
  }

  return (
    <section className="main-box">
      <h1>Hello all!</h1>
      {/* <CountButton increaseCount={increaseCount} />
      <DecreaseButton decreaseCount={decreaseCount} /> */}
      {/* New single-button-component code */}
      <Button whenYouClickMe={increaseCount}>Increase me!</Button>

      <Button whenYouClickMe={decreaseCount}>Decrease me!</Button>

      <TextDisplay count={count} resetCount={resetCount} />
      <p>but be careful if you click that number.....</p>
    </section>
  );
}
