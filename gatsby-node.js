const path = require('path');


// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create pages dynamically

exports.createPages = async ({ graphql, actions }) => {
 
  const {data} = await graphql(`query templateQueries {
  allMarkdownRemark {
    nodes {
      frontmatter {
        slug
      }
    }
  }
}`)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: '/items/' + node.frontmatter.slug,
      component: path.resolve('./src/templates/ItemPage.tsx'),
      context: {
        slug: node.frontmatter.slug
      },
    })
  })
}
