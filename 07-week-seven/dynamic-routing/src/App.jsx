import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import UserPage from "./Pages/UserPage";
import UserPosts from "./Pages/UserPosts";
import UserFavourites from "./Pages/UserFavourites";

export default function App() {
  return (
    <div>
      <h1>Welcome to the basic place</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:username" element={<UserPage />}>
          <Route path="" element={<h2>Choose an option</h2>} />
          <Route path="posts" element={<UserPosts />} />
          <Route path="favourites" element={<UserFavourites />} />
        </Route>
      </Routes>
    </div>
  );
}
