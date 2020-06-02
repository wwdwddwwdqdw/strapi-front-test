/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(
    `
      {
        works: allStrapiWork {
          edges {
            node {
              strapiId
              SEO
            }
          }
        }
        tags: allStrapiTag {
          edges {
            node {
              strapiId
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  const works = result.data.works.edges
  //   const categories = result.data.categories.edges

  works.forEach(work => {
    console.log(work)
    createPage({
      path: `/work/${work.node.SEO}`,
      component: require.resolve("./src/templates/work.js"),
      context: {
        id: work.node.strapiId,
      },
    })
  })

  //   categories.forEach((category, index) => {
  //     createPage({
  //       path: `/category/${category.node.strapiId}`,
  //       component: require.resolve("./src/templates/category.js"),
  //       context: {
  //         id: category.node.strapiId,
  //       },
  //     })
  //   })
}
