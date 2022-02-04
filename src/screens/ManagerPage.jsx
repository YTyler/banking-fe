import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { getCustomerByPan } from "../store/actions/customerActions";

export default function ManagerPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const customer = useSelector((state) => state.customerState.customer);
  const [pan, setPan] = useState("");
  const [customerExists, setCustomerExists] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!customer.pan) {
      setCustomerExists(false);
    } else {
      setCustomerExists(true);
    }
  }, [customer]);

  const searchCustomer = (ev) => {
    ev.preventDefault();
    if (pan) {
      dispatch(getCustomerByPan(pan));
    }
    setSubmitted(true);
  };

  const handlePanChange = (el) => {
    setPan(el.target.value);
    setSubmitted(false);
    if (window.location !== "/manager" || "/manager/") {
      navigate("/manager");
    }
  };
  return (
    <>
      <h1>Manager Access</h1>
      <section className="centered">
        <form className="card flexColumn" onSubmit={(e) => searchCustomer(e)}>
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
            (!customerExists ? (
              <>
                <h2 className="info">That customer does not yet exist</h2>
                <input
                  className="option"
                  type="button"
                  value="Create New Customer"
                  onClick={() => navigate("/manager/newuser")}
                />
              </>
            ) : (
              <>
                <h2 className="info">A customer with that PAN exists</h2>
                <input
                  className="option"
                  type="button"
                  value="Add Account"
                  onClick={() => navigate("/manager/addaccount")}
                />
              </>
            ))}
        </form>
        <Outlet context={[pan, setPan]} />
      </section>
    </>
  );
}
