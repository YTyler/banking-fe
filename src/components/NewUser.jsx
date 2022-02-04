import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createAccountHolder } from "../store/actions/userActions";

export default function NewUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const submitHandler = (ev) => {
    ev.preventDefault();
    dispatch(createAccountHolder({ username: username }));
    navigate("/manager/newcustomer");
  };
  return (
    <section>
      <form className="card flexColumn" onSubmit={(ev) => submitHandler(ev)}>
        <label>Username:</label>
        <input
          name="username"
          type="text"
          required
          autoFocus
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input className="submit" type="submit"></input>
      </form>
    </section>
  );
}
