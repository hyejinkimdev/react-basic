import React, { useState } from "react";

export default function AppForm() {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  const [form, setFrom] = useState({ name: "", email: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFrom({ ...form, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">이름:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={form.name}
        // onChange={(e) => {
        //   setName(e.target.value);
        // }}
        onChange={handleChange}
      />
      <label htmlFor="email">이메일:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={form.email}
        // onChange={(e) => {
        //   setEmail(e.target.value);
        // }}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
