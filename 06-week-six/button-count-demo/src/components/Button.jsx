import "/src/Button.css";

export default function Button({ whenYouClickMe, className, count, children }) {
  return (
    <>
      <button
        className={`my-button ${className ? className : ""}`}
        onClick={whenYouClickMe}
        style={count > 9 ? { backgroundColor: "orange" } : {}}
      >
        {children}
      </button>
    </>
  );
}
