module.exports = {
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Space Mono:400,400i,700,700i',
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-svgr-loader',
      options: {
        rule: {
          include: /\/assets\//,
          options: {
            titleProp: true,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-transition-link',
      options: {
        layout: require.resolve('./src/components/Layout.js')
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'Prisma',
        fieldName: 'prisma',
        url: 'https://eu1.prisma.sh/nevena-djaja/mocks/dev',
      },
    },
  ],
}
