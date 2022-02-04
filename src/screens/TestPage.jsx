import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUsers } from "../store/actions/userActions";

export default function TestPage() {
  const users = useSelector((state) => state.userState.users);
  const dispatch = useDispatch();

  const test = () => {
    dispatch(getUsers());
  };

  return (
    <div>
      <h1 onClick={test}>Test</h1>
      {users.map((user) => {
        return (
          <div key={user.user_id}>
            <h1>
              {user.user_id}: {user.username}
            </h1>
            <h2>{user.password}</h2>
            <h3>{user.role}</h3>
          </div>
        );
      })}
    </div>
  );
}
