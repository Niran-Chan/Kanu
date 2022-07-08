import React from "react";
import { Link } from "gatsby";

const Layout = ({ children }) => {
  return (
    <div>
      <nav className="flex bg-gray-900 items-center flex-wrap py-8 pl-8">
        <h3 className="logoStyles">Kanu</h3>
        <ul className="lg:inline-flex lg:flex-row lg:ml-auto">
          <li className="hrefStyles">
            <Link to="/">Home</Link>
          </li>
          <li className="hrefStyles">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hrefStyles">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
      <footer className="text-center py-8 bg-gray-900 text-white">
        <p>
          Copyright 2022 <span className="logoStyles">@Kanu</span>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
