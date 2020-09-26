module.exports = ({ basePath = `/`, mdx = true }) => ({
  siteMetadata: {
    siteTitle: `Aganvee Varunkumar`,
    siteTitleAlt: `Aganvee Varunkumar`,
    siteHeadline: `Aganvee Varunkumar`,
    siteUrl: `https://aganvee.in`,
    siteDescription: `Digital space reserved for Aganvee Varunkumar`,
    siteLanguage: `en`,
    siteImage: `/banner.png`,
    author: `@varunkumar`,
    basePath,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sections`,
        path: `${__dirname}/src/sections`,
      },
    },
    mdx && {
      resolve: `gatsby-plugin-mdx`,
      options: {},
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-theme-ui`,
  ].filter(Boolean),
});
