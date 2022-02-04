import React from "react";

export default function NewUser() {
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
        <input className="submit" type="submit"></input>
      </form>
    </section>
  );
}