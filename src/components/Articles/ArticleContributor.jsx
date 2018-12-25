import React from 'react';
import PropTypes from 'prop-types';

const ArticleContributor = ({ author, date }) => (
   <div className="article-footer__author">
      {/* <img className="article-footer__author--img" src="" alt=""/> */}
      <h2 className="article-footer__author--name">{ props.info.author.name }</h2>
      {/* <h4 className="article-footer__author--subtitle">Subtitle of author</h4> */}
      <span className="article-footer__date">{ props.info.date }</span>
   </div>
);

ArticleContributor.propTypes = {
  author: PropTypes.string,
  date: PropTypes.string
};

export default ArticleContributor;
