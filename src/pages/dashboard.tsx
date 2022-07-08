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
      <div class="mt-20 grid lg:grid-cols-3 gap-4 grow-0">
          { items.map(item =>
            
            <div class="bg-blue-100 rounded-lg object-contain w-50 h-50  ">
            <Link to={"/items/" + item.frontmatter.slug } key={item.id}> 
                <GatsbyImage image={getImage(item.frontmatter.thumb.childImageSharp.gatsbyImageData)}  alt="banner" />
                <div class="font rammetto">
                    <h1> {item.frontmatter.title}</h1>
                    <h1> {item.frontmatter.price}</h1> 
                </div>
            </Link>
            </div>
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