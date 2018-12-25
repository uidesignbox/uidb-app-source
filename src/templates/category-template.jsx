import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import GlobalLayout from '../components/Layout/GlobalLayout';
import MainContainer from '../components/Layout/MainContainer';
import OneThirdCol from '../components/Layout/OneThirdCol';
import TwoThirdsCol from '../components/Layout/TwoThirdsCol';

import SocialIcons from '../components/commons/SocialIcons';
import PageArticle from '../components/Pages/PageArticle';
import '../components/Pages/categories.scss';
import '../components/Pages/page.scss';

class CategoryTemplate extends Component {
   render() {
		const categoryInfo = this.props.data.allWordpressPost;
      const pageInfo = this.props.data.wordpressCategory;
      const metaTitle = this.props.data.wordpressCategory.description || `Find and learn from articles about ${pageInfo.name}`;
		return(
			<GlobalLayout>
				<Helmet
					title={ `${pageInfo.name} | ${this.props.pageContext.site.siteMetadata.title}` }
					meta={[
						{ name: "description", content: `${metaTitle}` }
					]}
				/>
				<section className="page-header__container">
					<p className="subtitle">Discover all articles for</p>
					<h1>{pageInfo.name}</h1>
				</section>
				<MainContainer>
               <TwoThirdsCol>
                  <section className="page__article-wrapper">
							{categoryInfo && categoryInfo.edges.map((item, index) => (
								<PageArticle key={index} info={item.node} />
							)) }
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

export const categoryQuery = graphql`
	query currentCategoryQuery($id: String!, $categories: [Int]) {
		wordpressCategory(id: { eq: $id }) {
			slug
         name
         description
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

export default CategoryTemplate;
