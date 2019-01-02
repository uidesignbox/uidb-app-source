require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'UiDesignBox',
    subtitle: 'Learn about user interface design, front-end development & tech with insighful posts.'
  },
  plugins: [
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "uidesignbox",
        accessToken: `${process.env.API_TOKEN}`,

        linkResolver: ({ node, key, value }) => doc => `/${doc.id}`,

        fetchLinks: [
          // Your list of links
        ],
        htmlSerializer: ({ node, key, value }) => (
          (type, element, content, children) => {
            // Your HTML serializer
          }
        ),
        lang: '*',
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-107285127-3",
        head: true,
        respectDNT: true,
        cookieDomain: "uidesignbox.com",
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
}
