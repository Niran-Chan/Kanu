import React,{useContext} from "react";
//context
import PrivateRoute from '../components/PrivateRoute'
import {AuthContext,AuthProvider} from '../context/auth'
// pages
import Dashboard from "./dashboard";
import Login from "./login";
import Sell from './sell';
// router
import { Router } from "@reach/router";
import { RouterPage } from "../types/router";
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <RouterPage path="/" pageComponent={<Dashboard />} />
        <RouterPage path="/login" pageComponent={<Login />} />
        <RouterPage path="/sell" pageComponent={<Sell />} />
      </Router>
    </AuthProvider>
  );
};

export default App;
