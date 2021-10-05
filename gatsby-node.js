const path = require('path')

exports.onPostBuild = ({ reporter }) => {
  reporter.info('Your Gatsby site has been built!')
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const detailsPageComponent = path.resolve('src/pages/_details.js')
  const result = await graphql(`
    {
      prisma {
        buddies {
          id
          name
          image
        }
      }
    }
  `)
  result.data.prisma.buddies.forEach(buddy => {
    createPage({
      path: `buddy/${buddy.id}`,
      component: detailsPageComponent,
      context: {
        buddy,
      },
    })
  })
}
