"use client";
import { ChangeEvent, useEffect, useState } from "react";
import HelloBlock from "./components/Hello";

interface FormState {
  myName?: string;
  myAge?: number;
  myHobby?: string;
}

export default function HomePage() {
  const [form, setForm] = useState<FormState>({});

  function UpdateForm(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    console.log(event.target);
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  return (
    <>
      <form>
        <label htmlFor="myName">Your Name - </label>
        <input type="text" id="myName" name="myName" onChange={UpdateForm} />

        <label htmlFor="myAge">Your Age - </label>
        <input type="number" id="myAge" name="myAge" onChange={UpdateForm} />

        <label htmlFor="myHobby">Your Hobby - </label>
        <input type="text" id="myHobby" name="myHobby" onChange={UpdateForm} />
      </form>
      <HelloBlock
        name={form.myName || "Your name here"}
        age={form.myAge || 0}
        hobby={form.myHobby || "Your hobby here"}
        like={true}
      />
    </>
  );
}
