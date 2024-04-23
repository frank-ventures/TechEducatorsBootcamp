export default function Button({ which, children }) {
  function handleClick() {
    console.log(which, children);
    alert(`I, button ${which} have been clicked!`);
  }

  function handleOtherClick(message) {
    alert(`The argument attached to this button is ${message}`);
  }

  return (
    <section className="">
      <button onClick={handleClick}>Click me! I am button {which}</button>

      <button onClick={() => console.log(`Hello log, I am button ${which}`)}>
        {children}
      </button>

      <button onClick={() => handleOtherClick("My inline message")}>
        Secrets
      </button>
    </section>
  );
}
