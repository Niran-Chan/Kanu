import React, { useContext, useState } from "react";
import { navigate } from "gatsby";
import { AuthContext } from "../context/authcontext";

const SignUp = () => {
  const { setIsAuth, setAuthUsername } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const checkFormSubmission = () => {
    if (!email) {
      setLoginError(true);
      setEmailErrorMessage("Please input an email!");
    }
    if (!password) {
      setLoginError(true);
      setPasswordErrorMessage("Please input a password!");
    }
    if (!username) {
      setLoginError(true);
      setUsernameErrorMessage("Please input a username!");
    }
  };

  const checkValidCredentials = () => {
    return true;
  };

  const handleCreate = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setLoginError(false);
    setLoading(true);
    checkFormSubmission();
    if (checkValidCredentials()) {
      setIsAuth("AUTHORISED");
      setAuthUsername(email);
      navigate("/");
    } else {
      setLoading(false);
      setLoginError(true);
      setPasswordErrorMessage("Email already exists in the system!");
    }
  };

  const handleBack = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    navigate("/login");
  };

  return (
    <div className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 flex flex-col h-screen">
      <div className="grid h-screen place-items-center">
        <form className="bg-gray-900 rounded-lg max-w-[400px] w-full mx-auto px-8 p-8">
          <h2 className="text-4xl dark:text-white text-center font-semibold">
            Sign Up
          </h2>
          <div className="flex flex-col text-gray-300 py-2">
            <label>Email</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2"
              value={email}
              onChange={handleEmail}
              type="text"
              placeholder="kanu@gmail.com"
            />
            {loginError ? (
              <span className="text-red-300 font-semibold">
                {emailErrorMessage}
              </span>
            ) : (
              <span></span>
            )}
          </div>
          <div className="flex flex-col text-gray-300 py-2">
            <label>Password</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2"
              value={password}
              onChange={handlePassword}
              type="password"
              placeholder="password123"
            />
            {loginError ? (
              <span className="text-red-300 font-semibold">
                {passwordErrorMessage}
              </span>
            ) : (
              <span></span>
            )}
          </div>
          <div className="flex flex-col text-gray-300 py-2">
            <label>Username</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2"
              value={username}
              onChange={handleUsername}
              type="text"
              placeholder="niranshivu"
            />
            {loginError ? (
              <span className="text-red-300 font-semibold">
                {usernameErrorMessage}
              </span>
            ) : (
              <span></span>
            )}
          </div>
          <button
            className="loginButtons"
            type="submit"
            disabled={loading}
            onClick={handleCreate}
          >
            Create account!
          </button>
          <button
            className="loginButtons"
            type="submit"
            disabled={loading}
            onClick={handleBack}
          >
            Back to Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
