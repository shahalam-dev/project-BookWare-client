import axios from "axios";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import SocialAuth from "../SocialAuth/SocialAuth";

const UserLogin = () => {
  const { handleLogIn, errorMsg } = useFirebase();
  const emailInput = useRef();
  const passwordInput = useRef();

  const handleLogInForm = async (e) => {
    e.preventDefault();
    const email = emailInput.current.value;
    const password = passwordInput.current.value;
    await handleLogIn(email, password);
    const { data } = await axios.post(
      "https://agile-wildwood-07833.herokuapp.com/login",
      { email }
    );
    localStorage.setItem("accessToken", data.accessToken);
  };
  return (
    <div className="row justify-content-center">
      <form onSubmit={handleLogInForm} className="col-md-6">
        {errorMsg && (
          <div className="alert alert-danger my-3" role="alert">
            {errorMsg}
          </div>
        )}
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
            ref={passwordInput}
            type="password"
            id="pass"
            className="form-control"
            required
          />
        </div>

        <button type="submit" className="btn btn-outline-info btn-lg">
          Log In
        </button>
        <span className="px-3">
          Don't have an account?
          <Link className="px-2" to="/register">
            Register
          </Link>
        </span>
        <div className="d-flex my-3 justify-content-center">
          <span className="px-3 link-primary">
            <Link to="/password-reset">Forget Password?</Link>
          </span>
        </div>
      </form>

      <hr className="mt-5" />
      <div className="d-flex justify-content-center">
        <div className="mt-3">
          <SocialAuth text={"Sign In with Google"}></SocialAuth>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
