import { useState } from "react";
import TextDisplay from "./TextDisplay.jsx";
import Button from "./Button.jsx";
import "/src/App.css";

// Code now refactored to only need one button component
// import CountButton from "./CountButton";
// import DecreaseButton from "./DecreaseButton";

export default function App() {
  const [showThings, setShowThings] = useState(false);

  function handleShowThings() {
    showThings ? setCount(count) : setCount(0);
    setShowThings(!showThings);
  }

  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <section className="main-box">
      <h1>Hello all!</h1>
      {showThings ? (
        <Button className="stop-game" whenYouClickMe={handleShowThings}>
          Stop playing? Resets your score!
        </Button>
      ) : (
        <Button className="start-game" whenYouClickMe={handleShowThings}>
          Do you want to play a game?
        </Button>
      )}

      {/* Old code */}
      {/* <CountButton increaseCount={increaseCount} />
      <DecreaseButton decreaseCount={decreaseCount} /> */}

      {/* New single-button-component code, within a ternary operator*/}

      {showThings ? (
        <>
          <Button whenYouClickMe={increaseCount} count={count}>
            Increase me!
          </Button>
          <Button whenYouClickMe={decreaseCount}>Decrease me!</Button>{" "}
          <TextDisplay count={count} resetCount={resetCount} />
          <p>but be careful if you click that number.....</p>
        </>
      ) : null}

      {count > 10 ? <p>Oh my, you really are a clicker!</p> : null}
    </section>
  );
}
