import React, { DetailedHTMLProps, HTMLAttributes, useContext } from "react";
import { Link } from "gatsby";
import { AuthContext } from '../context/authcontext'
const Layout = ({
  children,
}: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => {
  const handleAuth = () => {
    // handle auth context state
  };

  const {isAuth,setIsAuth} = useContext( AuthContext)
  const buttonText = (isAuth == "AUTHORISED") ? "Sign out" : "Login"
  const link = isAuth == "AUTHORISED" ? "/logout" : "/login"
  return (
    <div>
      <nav className="flex bg-gray-100 items-center flex-wrap py-8 pl-8">
        <h3 className="logoStyles">
        <Link to="/">
        Kanu
        </Link>
        </h3>
        <ul className="lg:inline-flex lg:flex-row lg:ml-auto">
        <Link to="/sell" >
          <li className="hrefStyles  ">Sell</li>
            </Link>
          <li className="hrefStyles">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hrefStyles">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="hrefStyles">
            <Link to={link} onClick={handleAuth}>
              {buttonText}
            </Link>
          </li>

        </ul>
      </nav>
      <main>{children}</main>
      <div className="py-2 bg-gray-100" />
      <footer className="text-center py-8 bg-gray-100 text-black">
        <p className="font-semibold">
          Copyright 2022 <span className="logoStyles">@Kanu</span>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
