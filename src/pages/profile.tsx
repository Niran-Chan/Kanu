import { useStaticQuery } from "gatsby";
import React from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { GraphQLData } from "../types/graphqldata";
import { query } from "./dashboard";

const arr = ["hi", "lol"]

const Profile = () => {
  const data = useStaticQuery(query);
  const items = data.allMarkdownRemark.nodes;

  return (
    <Layout
      children={
        <div className="bg-gray-100 w-full min-h-screen flex justify-center items-center">
          <body className="bg-gray-100 antialiased flex font-sans text-gray-900">
            <div className="px-4 rounded mx-auto max-w-3xl w-full my-32 inputs space-y-6">
              <div>
                <h1 className="text-4xl font-bold">Hi Ryan Jan!</h1>
                <p className="text-gray-600">View your listings</p>
              </div>
              <div className="bg-gray-100 w-full min-h-screen gap-4 flex-wrap justify-center items-center grid grid-rows-2 grid-flow-col">
                {items.map((item: GraphQLData) => (
                  <Card item={item} />
                ))}
              </div>
            </div>
          </body>
        </div>
      }
    />
  );
};

export default Profile;
