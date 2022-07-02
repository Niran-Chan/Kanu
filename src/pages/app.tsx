import React from "react";
import Dashboard from "./dashboard";
import { Router } from "@reach/router";
import { RouterPage } from "../types/router";

const App = () => {
  return (
    <>
      <Router>
        <RouterPage path="/" pageComponent={<Dashboard />} />
      </Router>
    </>
  );
};

export default App;
