module.exports = {
  siteMetadata: {
    title: `Zenith - Latest News`,
    description: `News Agency based in London.`,
    author: `@codobi`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `zenith`,
        short_name: `zenith`,
        start_url: `/`,
        background_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/images/zenith-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        /*
         * De volledige URL van je Headless WordPress site's GraphQL API.
         * Voorbeeld : "https://www.example-site.com/graphql"
         */
        url: "https://zenith.codobi.be/graphql",
        schema: {
          timeout: 1000000,
        },
      },
    },
  ],
}
