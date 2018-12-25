import React, { Component, PureComponent } from 'react';
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
    return (
      <GlobalLayout>
        {/* TODO: Add title and prop types */}
        <Helmet
          title={`Title | ${this.props.pageContext.site.siteMetadata.title}`}
          meta={[
            { name: "description", content: `${wordpressPage.content}` },
            { name: "keywords", content: "" }
          ]}
        />
        <section className="page-header__container">
          <p className="subtitle">Discover all articles for</p>
          <h1>{wordpressPage.title}</h1>
        </section>
        <MainContainer>
          <TwoThirdsCol>
            <section className="page__article-wrapper">
              {allWordpressPost && allWordpressPost.edges.map((item, index) => (
                <PageArticle
                  key={index}
                  image={item.featured_image}
                  slug={item.slug}
                  title={item.title}
                  author={item.author}
                  excerpt={item.excerpt}
                />
              ))}
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
	query currentPageQuery($id: String!, $categories: [Int]) {
		wordpressPage(id: { eq: $id }) {
			title
	  }
		allWordpressPost(
			filter: {
				categories: {
					wordpress_id: {
						in: $categories
					}
				}
			}
		) 
		{
			edges {
				node {
					title
					author {
						name
					}
					slug
					excerpt
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
`