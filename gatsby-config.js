const dotenv = require('dotenv')

if (process.env.ENVIRONMENT !== 'production') {
  dotenv.config()
}

const { spaceId, accessToken } = process.env

module.exports = {
  siteMetadata: {
    title: `Emmanuel Tarrou`,
    description: `Personal Site`,
    author: `@etarrou`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: `k7l63r17ea0z`,
        accessToken: `5pSBKby7IkqeiIc8j5EqWclwxn0GcR6lgtD2LWTiZss`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Emmanuel Tarrou`,
        short_name: `Emmanuel Tarrou`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#333`,
        icon: `src/images/fev_icon.png`, // This path is relative to the root of the site.
      },
    }, // To learn more, visit: https://gatsby.dev/offline // this (optional) plugin enables Progressive Web App + Offline functionality

    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
  ],
}
