export default function TextDisplay({ count, resetCount }) {
  return (
    <>
      <h2 onClick={resetCount}>Current click count: {count}</h2>
    </>
  );
}
