import React, { useRef } from "react";
import { toast } from "react-toastify";
import useFirebase from "../../hooks/useFirebase";

const ResetPassword = () => {
  const { handlePasswordReset, errorMsg } = useFirebase();
  const emailInput = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handlePasswordReset(emailInput.current.value);
    toast("Password reset email sent.");
  };
  return (
    <div className="row justify-content-center">
      <form onSubmit={handleSubmit} className="col-md-6">
        {errorMsg && (
          <div className="alert alert-danger my-3" role="alert">
            {errorMsg}
          </div>
        )}
        <div className="mb-3">
          <label htmlFor="email" className="form-label mb-3">
            Enter email to reset password.
          </label>
          <input
            ref={emailInput}
            type="email"
            id="email"
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-outline-info btn-lg">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
