import { UserProvider } from "./UserContext";
import { ThemeProvider } from "./ThemeContext";

import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { UserPage } from "./UserPage";
import { Home } from "./Home";

export default function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <ThemeProvider>
          <nav>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/users/bob"}>Users</NavLink>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/:username" element={<UserPage />} />
          </Routes>
        </ThemeProvider>
      </UserProvider>
    </BrowserRouter>
  );
}
