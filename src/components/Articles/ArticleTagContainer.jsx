import React from 'react';
import PropTypes from 'prop-types';
import ArticleTag from './ArticleTag';

const ArticleTagContainer = ({ tags }) => (
  <section className="article-footer__tag-container">
    <div className="article-footer__tags">
      {tags && tags.map((data, index) => (
        <ArticleTag
          key={index}
          tags={data}
          path={this.props.location}
        />
      ))}
    </div>
  </section>
);

ArticleTagContainer.propTypes = {
  tags: PropTypes.array
};

export default ArticleTagContainer;