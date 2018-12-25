const _ = require(`lodash`);
const path = require(`path`);
// const slash = require(`slash`);
const createPaginatedPages = require(`gatsby-paginate`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const posts = await graphql(`
  {
    allPrismicPost {
      edges {
        node {
          id
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

  const postTemplate = path.resolve("./src/templates/article-template.jsx");
  _.each(posts.data.allPrismicPost.edges, edge => {
    console.log('EDGE: ', edge);
    createPage({
      path: `/${edge.node.title}`,
      component: postTemplate[edge.node.template],
      context: {
        id: edge.node.id,
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