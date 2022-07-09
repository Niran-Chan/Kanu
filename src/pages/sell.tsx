import React, { useContext } from "react";
import PrivateRoute from "../components/PrivateRoute";
import Layout from "../components/Layout";
import { navigate } from "gatsby";

export default function Sell() {
  return (
    <PrivateRoute>
      <Layout>
        <h1>Welcome to Selling Page!</h1>
      </Layout>
    </PrivateRoute>
  );
}
