import { useState } from "react";

export default function Form() {
  //   const [name, setName] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    email: ""
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log("You clicked submit!");
  }

  function handleInputChange(event) {
    console.log(event.target.value);
    console.log(event.target.id);
    setFormValues(event.target.value);
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name Please:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Your email Please:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
        />
        <button type="submit">Submitto!</button>
      </form>
      <p>Your name is: {formValues.name}</p>
      <p>Your name is: {formValues.email}</p>
    </>
  );
}
