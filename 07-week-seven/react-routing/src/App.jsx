import { Routes, Route, Link } from "react-router-dom";
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
        <Link to="/">Go home</Link> | <Link to="/about">About me</Link> |{" "}
        <Link to="/contact">Contact me</Link>
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
