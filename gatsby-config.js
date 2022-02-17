module.exports = {
  siteMetadata: {
    title: `Raí Soares`,
    position: `Software Engineer`,
    description: `Desenvolvedor de software especialista em frontend.`,
    author: `Raí Soares`,
    siteUrl: `https://www.raisoares.me`,
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/projects`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads"
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false
            }
          },
          'gatsby-remark-lazy-load',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Raí Soares - Software Engineer`,
        short_name: `Raí Soares`,
        start_url: `/`,
        background_color: `#16202c`,
        display: `minimal-ui`,
        icon: `assets/img/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
