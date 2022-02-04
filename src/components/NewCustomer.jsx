import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useOutletContext } from "react-router-dom";
import { createCustomer } from "../store/actions/customerActions";

export default function NewCustomer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createdUser = useSelector((state) => state.userState.createdUser);
  const [pan] = useOutletContext();
  const [newCustomer, setnewCustomer] = useState({
    name: "",
    address: "",
    email: "",
    pan: pan,
  });
  const changeHandler = (el) => {
    setnewCustomer((prev) => {
      return {
        ...prev,
        [el.name]: el.value,
      };
    });
  };
  const submitHandler = async (ev) => {
    ev.preventDefault();
    dispatch(createCustomer(newCustomer, createdUser));
    navigate("/manager/success/customer");
  };

  console.log(createdUser);
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
