const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
    await buildCompanyPages({ actions, graphql, reporter });
}

const buildCompanyPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const component = path.resolve(`src/templates/upcoming-title.jsx`)
    const { data, errors } = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___slug] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `)
    if (errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
    data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: `/upcoming/${node.frontmatter.slug}`,
        component,
        context: {
            slug: node.frontmatter.slug
        }
      })
    })
}