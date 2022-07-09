import React, { useContext } from "react";
import { Link } from "gatsby";
import { AuthContext } from "../context/authcontext";
export default function Logout() {
  const { setIsAuth } = useContext(AuthContext);
  setIsAuth("NOT_AUTHORISED");

  return (
    <>
      <h1> Logging you out </h1>
      <Link to="/">Return back to home</Link>
    </>
  );
}
