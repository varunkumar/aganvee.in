require(`dotenv`).config({
  path: `.env`,
});

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  plugins: [
    {
      resolve: 'aganvee',
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-179038226-1',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aganvee Varunkumar`,
        short_name: `Aganvee`,
        description: `Personal website of Aganvee Varunkumar`,
        start_url: `/`,
        background_color: `#141821`,
        theme_color: `#141821`,
        display: `standalone`,
        icons: [
          {
            src: `/manifest-icon-192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/manifest-icon-512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
