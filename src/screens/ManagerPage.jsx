import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAccount } from "../store/actions/accountActions";

export default function ManagerPage() {
  const account = useSelector((state) => state.accountState.account);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [pan, setPan] = useState("");
  const [accountExists, setAccountExists] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!account.account_number) {
      setAccountExists(false);
    } else {
      setAccountExists(true);
    }
  }, [account]);

  const searchAccount = (event) => {
    event.preventDefault();
    if (pan) {
      dispatch(getAccount(pan));
    }
    setSubmitted(true);
  };

  const handlePanChange = (el) => {
    setPan(el.target.value);
    setSubmitted(false);
  };
  return (
    <div>
      <h1>Manager Access</h1>
      <div className="centered">
        <form className="card flexColumn" onSubmit={(e) => searchAccount(e)}>
          <label>Enter Permanent Account Number:</label>
          <input
            type="number"
            autoFocus
            placeholder={1000000000}
            min={1000000000}
            max={9999999999}
            step={1}
            value={pan}
            onChange={(el) => handlePanChange(el)}
          />
          <input className="submit" type="submit" value="Check for Account" />
          {submitted &&
            (!accountExists ? (
              <p>That account does not yet exist</p>
            ) : (
              <p>An account with that PAN exists</p>
            ))}
        </form>
        <div className="card flexColumn">
          <input
            type="button"
            value="Create New Customer"
            onClick={() => navigate("/manager/newcustomer")}
          />
          <input
            type="button"
            value="Add Account"
            onClick={() => navigate("/manager/newAccount")}
          />
        </div>
      </div>
    </div>
  );
}
