import React, { useContext, useEffect } from "react";
import { Link, navigate } from "gatsby";
import { AuthContext } from "../context/authcontext";

export default function Logout() {
  const { setIsAuth } = useContext(AuthContext);

  useEffect(() => setIsAuth(""), []);

  const handleSignOut = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setIsAuth("");
    navigate("/");
  };

  return (
    <div className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 flex flex-col h-screen">
      <div className="grid h-screen place-items-center">
        <form className="bg-gray-900 rounded-lg max-w-[400px] w-full mx-auto px-8 p-8">
          <h2 className="text-4xl dark:text-white text-center font-semibold">
            You have been signed out.
          </h2>
          <button
            className="w-full my-5 py-2 bg-teal-500 rounded text-white hover:shadow-md hover:shadow-teal-500/20"
            type="submit"
            onClick={handleSignOut}
          >
            Back to Home
          </button>
        </form>
      </div>
    </div>
  );
}
