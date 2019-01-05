import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

import GlobalLayout from '../components/Layout/GlobalLayout';
import MainContainer from '../components/Layout/MainContainer';
import OneThirdCol from '../components/Layout/OneThirdCol';
import TwoThirdsCol from '../components/Layout/TwoThirdsCol';

import SocialIcons from '../components/commons/SocialIcons';
import PageArticle from '../components/Pages/PageArticle';

import '../components/Pages/page.scss';

class PageTemplate extends PureComponent {
  render() {
    console.log('PAGE ARTICLE: ', this.props)
    return (
      <GlobalLayout>
        <Helmet
          // title={`Title | ${this.props.pageContext.site.siteMetadata.title}`}
          meta={[
            // { name: "description", content: `${wordpressPage.content}` },
            { name: "keywords", content: "" }
          ]}
        />
        <section className="page-header__container">
          <p className="subtitle">Discover all articles for</p>
          {/* <h1>{wordpressPage.title}</h1> */}
        </section>
        <MainContainer>
          <TwoThirdsCol>
            <section className="page__article-wrapper">
              {/* {allWordpressPost && allWordpressPost.edges.map((item, index) => (
                <PageArticle
                  key={index}
                  image={item.featured_image}
                  slug={item.slug}
                  title={item.title}
                  author={item.author}
                  excerpt={item.excerpt}
                />
              ))} */}
            </section>
          </TwoThirdsCol>
          <OneThirdCol>
            <div className="index__social-icons">
              <SocialIcons />
            </div>
          </OneThirdCol>
        </MainContainer>
      </GlobalLayout>
    )
  }
};

export default PageTemplate;

export const pageQuery = graphql`
	query currentPageQuery($uid: String!) {
		prismicPage(uid: { eq: $uid }) {
      uid
      data {
        page_title {
          text
        }
        seo {
          meta_description
          meta_keywords
        }
      }
    }
    allPrismicPost(
      filter: {
        data: {
          display_posts_location: {
            elemMatch: {
              parent_pages: {
                uid: {
                  eq: $uid
                }
              }
            }
          }
        }
      }
    ) {
      edges {
        node {
          uid
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
            seo {
              meta_description
              meta_keywords
            }
          }
        }
      }
    }
	}
`