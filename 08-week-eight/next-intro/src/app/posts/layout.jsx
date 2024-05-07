"use client";
import Link from "next/link";
import { useState } from "react";

export default function PostsLayout({ children }) {
  const [userInput, setUserInput] = useState("");

  function handleInput(event) {
    setUserInput(event.target.value);
  }

  return (
    <div>
      <p>I am in the layout in /posts</p>
      <input type="text" name="userInput" onChange={handleInput} />
      <nav>
        <Link href="/posts/1">Post 1</Link>
        <Link href="/posts/10">Post 10</Link>
        <Link href="/posts/50">Post 50</Link>
        <Link href="/posts/Bobecue">Bobecue</Link>
        <Link href={`/posts/${userInput}`}>{userInput}</Link>
      </nav>
      {children}
    </div>
  );
}
