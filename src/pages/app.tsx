import React from "react";

// pages
import Dashboard from "./Dashboard";
import Login from "./Login";

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
