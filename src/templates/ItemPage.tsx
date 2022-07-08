import React from 'react'
import Layout from '../components/Layout'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage,getImage} from 'gatsby-plugin-image'


export default function ItemPage ({data})
{

	console.log(data)
	const item = data.markdownRemark;
	return (

	<Layout>
		<h1> {item.frontmatter.title}</h1>
		<h2> {item.frontmatter.description}</h2>
		<GatsbyImage image={item.frontmatter.thumb.childImageSharp.gatsbyImageData} alt="pictures"/>



	</Layout>

	)
	


}


export const templateQuery = graphql`
query templateQuery($slug:String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
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
  }
}
`