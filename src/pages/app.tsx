import React from "react";

// pages
import Dashboard from "./dashboard";
import Login from "./login";

// router
import { Router } from "@reach/router";
import { RouterPage } from "../types/router";

const App = () => {
  return (
    <>
      <Router>
        <RouterPage path="/" pageComponent={<Dashboard />} />
        <RouterPage path="/login" pageComponent={<Login />} />
      </Router>
    </>
  );
};

export default App;
