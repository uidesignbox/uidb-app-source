import React from 'react';
import GlobalLayout from '../components/Layout/GlobalLayout';
import Helmet from 'react-helmet';
import PropTypes from "prop-types";

import OneThirdCol from '../components/Layout/OneThirdCol';
import SubscribeFooterSection from '../components/Contact/SubscribeFooterSection';

import IndexPosts from '../components/Index/IndexPosts';
import FeaturedArticle from '../components/Index/FeaturedArticle';
import FeaturedArticleImage from '../components/Index/FeaturedImage';
import SocialIcons from '../components/commons/SocialIcons';
import PaginateWrapper from '../components/Pagination/PaginateWrapper';
import PaginateArrow from '../components/Pagination/PaginateArrow';
import PaginateLink from '../components/Pagination/PaginateLink';

import '../components/Index/index.scss';


const FollowMsg = () => (
  <h4>Follow UiDesignBox</h4>
);

const IndexTemplate = ({ pathContext }) => {
  const { group, index, pageCount, additionalContext } = pathContext;
  const previousUrl = index - 1 === 1 ? '' : (index - 1).toString();
  const nextUrl = (index + 1).toString();
  const linkCheck = (pageCount - index > 0) ? true : false;

  const links = [];

  for (var num = 0; num < pageCount; num++) {
    links.push(<PaginateLink key={num} url={num + 1} />);
  }

  return (
    <GlobalLayout>
      <Helmet
        title={`${additionalContext.siteMetadata.title}`}
        meta={[
          { name: "description", content: `${additionalContext.siteMetadata.subtitle}` }
        ]}
      />
      <FeaturedArticleImage
        slug={group[0].node.slug}
        image={group[0].node.featured_media}
      />
      <div className="index__primary-container">
        <div className="featured__container">
          <FeaturedArticle 
            title={group[0].node.title}
            slug={group[0].node.slug}
            author={group[0].node.author}
            excerpt={group[0].node.excerpt}
          />
        </div>
        <div className="index__article-container">
          {group.slice(1).map((item, index) => <IndexPosts key={index} info={item.node} />)
          }
        </div>

        {/* Pagination container */}
        <PaginateWrapper>
          <PaginateArrow
            test={linkCheck}
            url={previousUrl}
            text='Previous'
            icon='angle-left'
          />
            { links }
          <PaginateArrow
            test={linkCheck}
            url={nextUrl}
            text='Next'
            icon='angle-right'
          />
        </PaginateWrapper>
      </div>

      <OneThirdCol>
        <div className="index__social-icons">
          <FollowMsg />
          <SocialIcons />
        </div>
      </OneThirdCol>
      <SubscribeFooterSection />
    </GlobalLayout>
  );
};

export default IndexTemplate;
