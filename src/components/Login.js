import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Swal from 'sweetalert2';
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { BG_BANNER, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              navigate("/browse");
              Swal.fire({
                title: 'Signed In!',
                text: `Welcome, ${user.displayName}!`,
                icon: 'success',
                confirmButtonText: 'OK',
                timer: 2000,
              });
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative min-h-screen bg-black">
      <Header />
      <div className="absolute inset-0 z-0">
        <img
          src={BG_BANNER}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative z-10 w-full max-w-md p-6 sm:p-8 lg:p-12 bg-black bg-opacity-80 text-white rounded-lg"
        >
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="w-full p-3 sm:p-4 mb-4 bg-gray-700 rounded-md"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className="w-full p-3 sm:p-4 mb-4 bg-gray-700 rounded-md"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-3 sm:p-4 mb-4 bg-gray-700 rounded-md"
          />
          {errorMessage && (
            <p className="text-red-500 text-sm sm:text-lg font-bold mb-4">
              {errorMessage}
            </p>
          )}
          <button
            className="w-full p-3 sm:p-4 mb-4 bg-red-700 hover:bg-red-800 rounded-lg font-semibold"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="text-center text-sm sm:text-base cursor-pointer hover:underline"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now."}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
