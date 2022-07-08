import React from "react";
import Layout from "../components/Layout";
import styles from '../styles/global.css'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function DashBoard ()
{
  const data = useStaticQuery(query); 
  const items = data.allMarkdownRemark.nodes;
  console.log(items)


  return (
    <Layout>
      <div className="masonry">
        { items.map(item => 
          <Link to={"/items/" + item.frontmatter.slug } key={item.id}>
           <GatsbyImage image={getImage(item.frontmatter.thumb.childImageSharp.gatsbyImageData)}  alt="banner" />
          </Link>
        )
        }
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
`
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