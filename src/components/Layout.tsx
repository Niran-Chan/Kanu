import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import { Link } from "gatsby";

const Layout = ({
  children,
}: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => {
  const handleSignOut = () => {
    // handle auth context state
  };

  return (
    <div>
      <nav className="flex bg-gray-100 items-center flex-wrap py-8 pl-8">
        <h3 className="logoStyles">Kanu</h3>
        <ul className="lg:inline-flex lg:flex-row lg:ml-auto">
          <li className="hrefStyles">
            <Link to="/">Home</Link>
          </li>
          <li className="hrefStyles">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="hrefStyles">
            <Link to="/login" onClick={handleSignOut}>
              Sign Out
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
