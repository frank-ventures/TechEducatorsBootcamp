import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import "./App.css";

export default function App() {
  return (
    <>
      <h1>Hello! This is my page - Nice innit</h1>
      <nav>
        <NavLink to="/">Go home</NavLink> |{" "}
        <NavLink to="/about">About me</NavLink> |{" "}
        <NavLink to="/contact">Contact me</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
