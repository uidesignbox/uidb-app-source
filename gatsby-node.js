const _ = require(`lodash`);
const path = require(`path`);
const createPaginatedPages = require(`gatsby-paginate`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const posts = await graphql(`
  {
    prismicPost {
      uid
      type
      last_publication_date(formatString: "MM YYYY")
      data {
        post_title {
          text
        }
        body_content {
          html
        }
        featured_image {
          alt
          copyright
          url
        }
        timestamp(formatString: "MMMM DD YYYY")
      }
    }
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
  `)

  const allPosts = await graphql(`
  {
    allPrismicPost {
      edges {
        node {
          uid
          data {
            post_title {
              text
            }
            featured_image {
              alt
              url
            }
            body_content {
              html
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
  `)

  const pages = await graphql(`
  {
    allPrismicPage {
      edges {
        node {
          id
          uid
          template
        }
      }
    }
    site {
      siteMetadata {
        title
        subtitle
      }
    }
  }
  `)

  // Create Page template pages.
  // const pageTemplate = path.resolve("./src/templates/page-template.jsx");
  // _.each(pages.data.allPrismicPages.edges, edge => {
  //   createPage({
  //     path: `/${edge.node.uid}`,
  //     component: pageTemplate[edge.node.template],
  //     context: {
  //       id: edge.node.id,
  //     },
  //   })
  // });

  const articleTemplate = path.resolve("./src/templates/article-template.jsx");
  _.each(allPosts.data.allPrismicPost.edges, edge => {
    console.log('EDGE: ', JSON.stringify(edge, null, 2));
    createPage({
      path: `/${edge.node.uid}`,
      component: articleTemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  });

  // Use gatsby-pagination plugin to create paginated links on index page.
  // createPaginatedPages({
  //   edges: result.data.allWordpressPost.edges,
  //   createPage: createPage,
  //   pageTemplate: 'src/templates/index-template.jsx',
  //   pageLength: 3,
  //   pathPrefix: '',
  //   context: result.data.site
  // });
}