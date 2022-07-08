import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const checkFormSubmission = () => {
    if (!username) {
      setLoginError(true);
      setUsernameErrorMessage("Please input an email!");
    }
    if (!password) {
      setLoginError(true);
      setPasswordErrorMessage("Please input a password!");
    }
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setLoginError(false);
    setLoading(true);
    checkFormSubmission();
  };

  return loading ? (
    <>
      <div>{username}</div>
      <div>{password}</div>
    </>
  ) : (
    <div className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 flex flex-col h-screen">
      <div className="grid h-screen place-items-center">
        <form className="bg-gray-900 rounded-lg max-w-[400px] w-full mx-auto px-8 p-8">
          <h2 className="text-4xl dark:text-white text-center font-semibold">
            Sign In
          </h2>
          <div className="flex flex-col text-gray-300 py-2">
            <label>Email</label>
            <input
              className="rounded-lg bg-gray-700 mt-2 p-2"
              value={username}
              onChange={handleUsername}
              type="text"
              placeholder="kanu@gmail.com"
            />
            {loginError ? (
              <span className="text-red-300 font-semibold">
                {usernameErrorMessage}
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
          <button
            className="w-full my-5 py-2 bg-teal-500 rounded text-white hover:shadow-md hover:shadow-teal-500/20"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
