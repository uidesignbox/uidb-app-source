import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import GlobalLayout from '../components/Layout/GlobalLayout';
import MainContainer from '../components/Layout/MainContainer';
import OneThirdCol from '../components/Layout/OneThirdCol';
import TwoThirdsCol from '../components/Layout/TwoThirdsCol';

import ArticleListItem from '../components/Articles/Archive/ArticleListItem';
import '../components/Articles/Archive/archive.scss';

class AllArticlesArchive extends React.Component {
  render() {
    const data = this.props.data.allWordpressPost.edges;
    return (
      <GlobalLayout>
        <Helmet
          title={`All Articles | UiDesignBox`}
          meta={[
            { name: "description", content: "" },
            { name: "keywords", content: "" }
          ]}
        />
        <MainContainer>
          <div className="archive__header">
            <header>
              <h1>All Articles</h1>
              <p>Discover all articles by UiDesignBox</p>
            </header>
          </div>
          <OneThirdCol>
            <section className="archive__articles">
              {data.map((article, index) =>
                <ArticleListItem key={index} info={article.node} />
              )}
            </section>
          </OneThirdCol>
          <TwoThirdsCol>
          </TwoThirdsCol>
        </MainContainer>
      </GlobalLayout>
    )
  }
};

// export default AllArticlesArchive;

export default props => (
  <StaticQuery
    query={graphql`
        query allArticles {
            allWordpressPost {
                edges {
                   node {
                      author {
                         name
                      }
                      id
                      title
                      excerpt
                      slug
                      date(formatString: "MMMM DD, YYYY")
                      featured_media {
                         alt_text
                         localFile {
                            childImageSharp {
                            fixed {
                               width
                               height
                               src
                               srcSet
                            }
                            }
                         }
                      }
                   }
                }
            }
        }
    `}
    render={data => <AllArticlesArchive data={data} {...props} />}
  />
)

// export const allArticlesQuery = graphql`
//     query allArticles {
//         allWordpressPost {
//             edges {
//                node {
//                   author {
//                      name
//                   }
//                   id
//                   title
//                   excerpt
//                   slug
//                   date(formatString: "MMMM DD, YYYY")
//                   featured_media {
//                      alt_text
//                      localFile {
//                         childImageSharp {
//                         fixed {
//                            width
//                            height
//                            src
//                            srcSet
//                         }
//                         }
//                      }
//                   }
//                }
//             }
//         }
//     }
// `