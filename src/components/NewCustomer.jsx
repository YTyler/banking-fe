import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function NewCustomer() {
  const [pan] = useOutletContext();
  const [newCustomer, setnewCustomer] = useState({
    name: "",
    address: "",
    email: "",
    pan: pan,
    username: "",
  });
  const changeHandler = (el) => {
    setnewCustomer((prev) => {
      return {
        ...prev,
        [el.name]: el.value,
      };
    });
  };
  const submitHandler = (ev) => {
    ev.preventDefault();
  };
  return (
    <section>
      <form className="card flexColumn" onSubmit={(ev) => submitHandler(ev)}>
        <label>Full Name:</label>
        <input
          name="name"
          type="text"
          required
          value={newCustomer.name}
          onChange={(ev) => changeHandler(ev.target)}
        />
        <label>Address:</label>
        <input
          name="address"
          type="text"
          required
          value={newCustomer.address}
          onChange={(ev) => changeHandler(ev.target)}
        />
        <label>Email:</label>
        <input
          name="email"
          type="text"
          required
          pattern=".+@.+\.com"
          value={newCustomer.email}
          onChange={(ev) => changeHandler(ev.target)}
        />
        <label>Username:</label>
        <input
          name="username"
          type="text"
          required
          value={newCustomer.username}
          onChange={(ev) => changeHandler(ev.target)}
        />
        <input className="submit" type="submit"></input>
      </form>
    </section>
  );
}
