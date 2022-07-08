import React from "react";

// pages
import Dashboard from "./dashboard";
import Login from "./login";
import SignUp from "./signup";

// router
import { Router } from "@reach/router";
import { RouterPage } from "../types/router";

const App = () => {
  return (
    <>
      <Router>
        <RouterPage path="/" pageComponent={<Dashboard />} />
        <RouterPage path="/login" pageComponent={<Login />} />
        <RouterPage path="/signup" pageComponent={<SignUp />} />
      </Router>
    </>
  );
};

export default App;
