import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { loginUser } from "../store/actions/userActions";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginIsValid, setLoginIsValid] = useState(true);

  const user = useSelector((state) => state.userState.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.role === "account_holder") {
      navigate("/customer");
    } else if (user.role === "bank_manager") {
      navigate("/manager");
    }
  }, [navigate, user]);

  const loginHandler = (event) => {
    event.preventDefault();
    dispatch(loginUser(username, password));
    if (user.user_id) {
      setLoginIsValid(true);
    } else {
      setLoginIsValid(false);
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="centered">
      <form className="card flexColumn" onSubmit={(e) => loginHandler(e)}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(el) => {
            setUsername(el.target.value);
          }}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(el) => setPassword(el.target.value)}
        />
        <input className="submit" type="submit"></input>
        {!loginIsValid && <p>Login Credentials are Invalid</p>}
      </form>
    </div>
  );
}
