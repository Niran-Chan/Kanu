import React, { useContext } from "react";
import { AuthContext } from "../context/authcontext";
import { navigate } from "gatsby";

type Prop = {
  children: JSX.Element;
};

export default function PrivateRoute({ children }: Prop) {
  const { isAuth } = useContext(AuthContext);
  console.log(isAuth);
  if (isAuth == "AUTHORISED") return <>{children}</>;
  else navigate("/login");
}
