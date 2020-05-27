/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Backroads",
    description: "Explore awesome worldwide tors & discover what makes them unique.",
    author: "John Doe"
  },
  plugins: [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images/`
    },
  },
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      // Learn about environment variables: https://gatsby.dev/env-vars
      
    },
  },
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  // plugins: [
  //   'gatsby-plugin-styled-components'
  // ]
],
} 
