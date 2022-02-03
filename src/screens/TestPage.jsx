import React from "react";
import { useSelector } from "react-redux";

export default function TestPage() {
  const user = useSelector((state) => state.userState.currentUser);

  return (
    <div>
      <h1>
        {user.user_id}: {user.username}
      </h1>
      <h2>{user.password}</h2>
      <h3>{user.role}</h3>
    </div>
  );
}
