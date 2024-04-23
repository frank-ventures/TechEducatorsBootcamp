import "/src/Button.css";

export default function Button({ whenYouClickMe, children }) {
  return (
    <>
      <button className="my-button" onClick={whenYouClickMe}>
        {children}
      </button>
    </>
  );
}
