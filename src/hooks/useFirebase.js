import axios from "axios";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.config";

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [errorMsg, setErrorMsg] = useState("");
  const googleProvider = new GoogleAuthProvider();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const home = "/";

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(async (result) => {
        const user = result.user;
        const email = user.email;
        const { data } = await axios.post("http://localhost:5000/login", {
          email,
        });
        localStorage.setItem("accessToken", data.accessToken);
        setUser(user);
        console.log(email);
      })
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
      });
  };

  const createUserWithEmail = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name,
        });
        setErrorMsg("");
        sendEmailVerification(auth.currentUser);
        setUser(user);
      })
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
      });
  };

  const handleLogIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
      });
  };

  const handlePasswordReset = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setErrorMsg("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMsg(errorMessage);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .then(() => {
        navigate(home, { replace: true });
      });
  };

  return {
    handleGoogleSignIn,
    createUserWithEmail,
    handlePasswordReset,
    handleLogIn,
    user,
    logOut,
    errorMsg,
  };
};

export default useFirebase;
