import React from "react";
import Layout from "../components/Layout";
import { graphql, useStaticQuery } from "gatsby";

// components
import Card from "../components/Card";

// types
import { GraphQLData } from "../types/graphqldata";

const DashBoard = () => {
  const data = useStaticQuery(query);
  const items = data.allMarkdownRemark.nodes;
  console.log(items);

  return (
    <Layout>
      <div className="mt-20 grid lg:grid-cols-3 gap-4 grow-0">
        {items.map((item: GraphQLData) => (
          <Card item={item} />
        ))}
      </div>
    </Layout>
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
