import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CreateSuccess() {
  const customer = useSelector((state) => state.customerState.createdCustomer);
  const { item } = useParams();

  console.log(customer);
  return (
    <div className="card flexColumn">
      <h2 className="info">
        {item[0].toUpperCase() + item.slice(1)} was successfully created
      </h2>
    </div>
  );
}
