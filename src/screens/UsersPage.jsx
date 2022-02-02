import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUsers } from "../store/actions/userActions";

export default function UsersPage() {
  const users = useSelector((state) => state.userState.users);
	const dispatch = useDispatch();
	console.log(users)

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div>
      {users.map((u) => (
        <div key={u.id}>
          <h1>{u.name}</h1>
        </div>
      ))}
    </div>
  );
}
