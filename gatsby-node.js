const _ = require(`lodash`);
const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const allPosts = await graphql(`
  {
    allPrismicPost {
      edges {
        node {
          uid
          data {
           display_posts_location {
              parent_pages {
                uid
              }
            }
          }
        }
      }
    }
    allPrismicPage {
      edges {
        node {
          uid
        }
      }
    }
  }
  `)

  
  // Create posts pages
  const articleTemplate = path.resolve("./src/templates/article-template.jsx");
  const pageTemplate = path.resolve("./src/templates/page-template.jsx");
  
  _.each(allPosts.data.allPrismicPost.edges, post => {
    
    createPage({
      path: `/${post.node.uid}`,
      component: articleTemplate,
      context: {
        uid: post.node.uid,
      },
    })

    // Create Page template pages.
    _.each(allPosts.data.allPrismicPage.edges, page => {
      createPage({
        path: `/page/${page.node.uid}`,
        component: pageTemplate,
        context: {
          uid: page.node.uid
        },
      })
    });
  });
}