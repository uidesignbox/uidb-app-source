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
        // The token will be listed under "Permanent access tokens".


        linkResolver: ({ node, key, value }) => doc => {
          // Your link resolver
        },

        // Set a list of links to fetch and be made available in your link
        // resolver function.
        // See: https://prismic.io/docs/javascript/query-the-api/fetch-linked-document-fields
        fetchLinks: [
          // Your list of links
        ],

        // Set an HTML serializer function used to process formatted content.
        // Fields with rich text formatting use this function to generate the
        // correct HTML.
        // The document node, field key (i.e. API ID), and field value are
        // provided to the function, as seen below. This allows you to use
        // different HTML serializer logic for each field if necessary.
        // See: https://prismic.io/docs/nodejs/beyond-the-api/html-serializer
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
