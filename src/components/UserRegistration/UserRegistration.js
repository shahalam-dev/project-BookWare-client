import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import SocialAuth from "../SocialAuth/SocialAuth";

const UserRegistration = () => {
  const { createUserWithEmail, errorMsg } = useFirebase();
  const nameInput = useRef();
  const emailInput = useRef();
  const passInput = useRef();

  const handleRegistrationForm = (e) => {
    e.preventDefault();
    createUserWithEmail(
      nameInput.current.value,
      emailInput.current.value,
      passInput.current.value
    );
  };
  return (
    <div className="row justify-content-center">
      <form onSubmit={handleRegistrationForm} className="col-md-6">
        {errorMsg && (
          <div className="alert alert-danger my-3" role="alert">
            {errorMsg}
          </div>
        )}

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            ref={nameInput}
            type="text"
            id="name"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            ref={emailInput}
            type="email"
            id="email"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pass" className="form-label">
            Password
          </label>
          <input
            ref={passInput}
            type="password"
            id="pass"
            className="form-control"
            required
          />
        </div>

        <button type="submit" className="btn btn-outline-info btn-lg">
          Create Your Account
        </button>
        <span className="px-3">
          Already have an account?
          <Link className="px-2" to="/login">
            Login
          </Link>
        </span>
      </form>
      <hr className="mt-5" />
      <div className="d-flex justify-content-center">
        <div className="mt-3">
          <SocialAuth text={"Sign Up with Google"}></SocialAuth>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;
