module.exports = {
  assetPrefix: `assets`,
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { 
        prefixes: [`/app/*`] 
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    {     // antd 按需加载
      resolve: 'gatsby-plugin-import',
      options: {
        libraryName: "antd",
        style: true,   // or 'css'
      }
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
      }
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-remove-trailing-slashes`  // remove "/" at the end of URL
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
