import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h2>Page Not Found</h2>
      <p>You shall not pass!</p>
      <Link to="/">Probably go to the home page</Link>
    </>
  );
}
