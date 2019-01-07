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
    const { data } = this.props;
    const posts = data.allPrismicPost.edges;
    const page = data.prismicPage.data;
    const pageSeo = page.seo;

    return (
      <GlobalLayout>
        <Helmet
          title={`${page.page_title.text} | ${page.uid}`}
          meta={[
            { name: "description", content: `${pageSeo.length > 0 ? pageSeo[0].meta_description : ''}` },
            { name: "keywords", content: "" }
          ]}
        />
        <section className="page-header__container">
          <p className="subtitle">Discover all articles for</p>
          <h1>{page.page_title.text}</h1>
        </section>
        <MainContainer>
          <TwoThirdsCol>
            <section className="page__article-wrapper">
              {posts.map((item, i) => {
                const { data } = item.node;
                return (
                  <PageArticle
                    key={i}
                    image={data.featured_image}
                    slug={item.node.uid}
                    title={data.post_title.text}
                  />
                )
              })
              }
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