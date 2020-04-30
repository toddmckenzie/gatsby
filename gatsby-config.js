/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
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
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  // plugins: [
  //   'gatsby-plugin-styled-components'
  // ]
],
} 
