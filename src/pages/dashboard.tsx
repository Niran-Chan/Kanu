import React, { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import { graphql, useStaticQuery } from "gatsby";

// components
import Card from "../components/Card";

// types
import { GraphQLData } from "../types/graphqldata";

const DashBoard = () => {
  const data = useStaticQuery(query);
  const items = data.allMarkdownRemark.nodes;

  return (
    <Layout
      children={
        <div className="bg-gray-100 w-full min-h-screen gap-4 flex-wrap justify-center items-center grid grid-rows-2 grid-flow-col">
          {items.map((item: GraphQLData) => (
            <Card item={item} />
          ))}
        </div>
      }
    />
  );
};

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          description
          price
          slug
          thumb {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
      }
    }
  }
`;

/////////////////////
// DEBUGGING QUERY //
/////////////////////

/*
export const query = graphql`
query MyQuery {
  allFile {
    totalCount
  }
}

`
*/

export default DashBoard;
