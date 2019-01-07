import React from 'react';
import PropTypes from 'prop-types';

const ArticleContributor = ({ author, date }) => (
   <div className="article-footer__author">
      <h2 className="article-footer__author--name">{ author }</h2>
      <span className="article-footer__date">{ date }</span>
   </div>
);

ArticleContributor.propTypes = {
  author: PropTypes.string,
  date: PropTypes.string
};

export default ArticleContributor;
