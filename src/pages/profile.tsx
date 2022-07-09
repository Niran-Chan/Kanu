import React from "react";
import Layout from "../components/Layout";

const Profile = () => {
  return (
    <Layout
      children={
        <div className="bg-gray-100 w-full min-h-screen gap-4 flex-wrap justify-center items-center grid grid-rows-2 grid-flow-col">
          profile page
        </div>
      }
    />
  );
};

export default Profile;
