import React from "react";
import useFirebase from "../../hooks/useFirebase";

const SocialAuth = ({ text }) => {
  const { handleGoogleSignIn } = useFirebase();
  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        type="button"
        className="btn btn-outline-info btn-lg"
      >
        <img
          src="https://i.ibb.co/2npfC61/google.png"
          alt=""
          className="mx-2"
        />
        {text}
      </button>
    </div>
  );
};

export default SocialAuth;
