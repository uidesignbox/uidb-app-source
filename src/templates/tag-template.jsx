import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import GlobalLayout from '../components/Layout/GlobalLayout';
import MainContainer from '../components/Layout/MainContainer';
import OneThirdCol from '../components/Layout/OneThirdCol';
import TwoThirdsCol from '../components/Layout/TwoThirdsCol';

import SocialIcons from '../components/commons/SocialIcons';
import PageArticle from '../components/Pages/PageArticle';

import '../components/Pages/page.scss';

class TagTemplate extends Component {
	render() {
		const tagInfo = this.props.data.allWordpressPost;
      const pageInfo = this.props.data.wordpressTag;
      const metaTitle = this.props.data.wordpressTag.description || `Find and learn from articles about ${pageInfo.name}`;
		return(
			<GlobalLayout>
            {console.log(metaTitle)}
				<Helmet
					title={ `${pageInfo.name} | ${this.props.pageContext.site.siteMetadata.title}` }
					meta={[
						{ name: "description", content: `${metaTitle}` },
					]}
				/>
				<section className="page-header__container">
					<p className="subtitle">Discover all articles for</p>
					<h1>{pageInfo.name}</h1>
				</section>
				<MainContainer>
               <TwoThirdsCol>
                  <section className="page__article-wrapper">
							{tagInfo && tagInfo.edges.map((item, index) => (
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

export default TagTemplate;

// export const tagQuery = graphql`
// 	query currentTagQuery($id: String!, $tags: [Int]) {
// 		wordpressTag(id: { eq: $id }) {
// 			slug
//          name
//          description
// 		}
// 		allWordpressPost(
// 			filter: {
// 				tags: {
// 					wordpress_id: {
// 						in: $tags
// 					}
// 				}
// 			}
// 		) 
// 		{
// 			edges {
// 				node {
// 					title
// 					author {
// 						name
// 					}
// 					slug
// 					excerpt
// 					featured_media {
// 						alt_text
// 						localFile {
// 						  childImageSharp {
// 							fixed {
// 								width
// 								height
// 								src
// 								srcSet
// 							}
// 						  }
// 						}
// 					}
// 				}
// 			}
//       }
// 	}
// `