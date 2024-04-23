import { useState } from "react";
import CountButton from "./CountButton";
import DecreaseButton from "./DecreaseButton";
import TextDisplay from "./TextDisplay";

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
      <CountButton increaseCount={increaseCount} />
      <DecreaseButton decreaseCount={decreaseCount} />
      <TextDisplay count={count} resetCount={resetCount} />
      <p>but be careful if you click that number.....</p>
    </section>
  );
}
