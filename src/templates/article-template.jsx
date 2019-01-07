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
    const post = this.props.data.prismicPost.data
    const { site } = this.props.data
    const seo = post.seo.length > 0 ? post.seo[0] : '';

    return (
      <GlobalLayout>
        <Helmet
          title={`${post.post_title.text} | ${site.siteMetadata.title}`}
          meta={[
            { name: "description", content: `${seo.meta_description}` },
            { name: "keywords", content: `${seo.meta_keywords || ''}` }
          ]}
        />
        <MainContainer>
          <TwoThirdsCol>
            <article className="article__container">
              <ArticleHeader
                title={post.post_title.text}
                date={post.timestamp}
                image={post.featured_image}
              />
              <ArticleBody content={post.body_content.html} />
            </article>
          </TwoThirdsCol>
          <OneThirdCol>
            <ArticleFooter
              date={post.timestamp}
            />
            <ArticleFooterShare
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
	query PostBySlug($uid: String!) {
		prismicPost(uid: { eq: $uid }) {
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
        seo {
          meta_description
          meta_keywords
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
`