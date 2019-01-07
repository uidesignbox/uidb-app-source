import React from 'react';
import PropTypes from 'prop-types';

const ArticleBody = ({ content }) => (
  <div className="article__body-content" dangerouslySetInnerHTML={{ __html: content }}></div>
);

ArticleBody.propTypes = {
  content: PropTypes.string.isRequired
};

export default ArticleBody;