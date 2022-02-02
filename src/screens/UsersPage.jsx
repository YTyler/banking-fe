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
        <div key={u.user_id}>
          <h1>{u.username}</h1>
        </div>
      ))}
    </div>
  );
}
