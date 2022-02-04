import React from "react";
import { useParams } from "react-router-dom";

export default function CreateSuccess() {
  const { item } = useParams();
  return (
    <div className="card flexColumn">
      <h2 className="info">
        {item[0].toUpperCase() + item.slice(1)} was successfully created
      </h2>
    </div>
  );
}
