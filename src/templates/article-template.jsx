import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';

// Layouts
import GlobalLayout from '../components/Layout/GlobalLayout';
import MainContainer from '../components/Layout/MainContainer';
import OneThirdCol from '../components/Layout/OneThirdCol';
import TwoThirdsCol from '../components/Layout/TwoThirdsCol';

import ArticleHeader from '../components/Articles/ArticleHeader';
import ArticleBody from '../components/Articles/ArticleBody';
import ArticleFooter from '../components/Articles/ArticleFooter';
import ArticleFooterShare from '../components/Articles/ArticleFooterShare';
import ModalOverlay from '../components/commons/ModalOverlay';
import SubscribeFooterSection from '../components/Contact/SubscribeFooterSection';
import SubscribeModal from '../components/Articles/SubscribeModal';

import '../components/Articles/article.scss';

class ArticlePost extends PureComponent {
  constructor() {
    super();
    this.state = {
      isSubscribeOpen: false,
      copiedLink: null
    };

    this.openSubscribe = this.openSubscribe.bind(this);
    this.handleCopyLink = this.handleCopyLink.bind(this);
    this.handleCopyMessage = this.handleCopyMessage.bind(this);
  };

  handleCopyMessage() {
    this.setState(prevState =>
      ({ copiedLink: !prevState.copiedLink })
    );
  };

  handleCopyLink(e) {
    // Create dummy input element to select and copy url to clipboard, then remove.
    const url = e.currentTarget.getAttribute('data-url');
    const temporary = document.createElement('input');
    document.body.appendChild(temporary);
    temporary.value = url;
    temporary.select();
    document.execCommand('copy');
    document.body.removeChild(temporary);
    this.handleCopyMessage();
  };

  openSubscribe() {
    this.setState(prevState => ({
      isSubscribeOpen: !prevState.isSubscribeOpen
    }));
  };

  render() {
    return (
      <GlobalLayout>
        <Helmet
          title={`Title | UiDesignBox`}
          meta={[
            { name: "description", content: `${post.acf.meta_description}` },
            { name: "keywords", content: `${post.acf.meta_keywords}` }
          ]}
        />
        <MainContainer>
          <TwoThirdsCol>
            <article className="article__container">
              <ArticleHeader info={post} />
              <ArticleBody content={post.content} />
            </article>
          </TwoThirdsCol>
          <OneThirdCol>
            <ArticleFooter article={ post } />
            <ArticleFooterShare
              article={post}
              handleCopyLink={this.handleCopyLink}
              copiedLink={this.copiedLink}
              path={this.props.location.href}
            />
          </OneThirdCol>
        </MainContainer>

        <SubscribeFooterSection />
        {this.state.isSubscribeOpen &&
          <ModalOverlay>
            <SubscribeModal toggle={this.openSubscribe} />
          </ModalOverlay>
        }
      </GlobalLayout>
    )
  }
};

export default ArticlePost;

export const articleQuery = graphql`
	query currentPostQuery($id: String!) {
		wordpressPost(id: { eq: $id }) {
			title
			content
			excerpt
			acf {
				meta_description
				meta_keywords
			}
			date(formatString: "MMMM DD, YYYY")
			author {
				name
				description
			}
			tags {
				name
				link
				slug
			}
			categories {
				name
			}
			featured_media {
				alt_text
				caption
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
		site {
			siteMetadata {
					title
					subtitle
			}
		}
	}
`
