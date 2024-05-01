import { useContext } from "react";

import { UserContext } from "./UserContext";

import { ThemeContext } from "./ThemeContext";

export function UserPage() {
  let { username, setUsername } = useContext(UserContext);

  let { theme, setTheme } = useContext(ThemeContext);

  function handleThemeToggle() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  function handleNameChange(event) {
    setUsername(event.target.value);
  }

  return (
    <>
      {" "}
      <h2>User ID: {username}</h2>{" "}
      <form>
        <label htmlFor="name">Your name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={username}
          onChange={handleNameChange}
        />
      </form>
      <button onClick={() => setUsername("spongebob")}>
        Change username to spongebob
      </button>
      <button onClick={handleThemeToggle}>Change theme</button>
      <p>Your theme is: {theme}</p>
    </>
  );
}
