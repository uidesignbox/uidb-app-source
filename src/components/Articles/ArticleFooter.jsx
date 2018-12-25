import React from 'react';
import ArticleContributor from './ArticleContributor';
import ArticleTagContainer from './ArticleTagContainer';
import PropTypes from 'prop-types';

const ArticleFooter = ({ article }) => (
  <footer className="article__footer">
    <div className="left-column">
      <ArticleContributor date={article.date} author={article.author} />
      <ArticleTagContainer tags={article.tags} />
    </div>
  </footer>
);

ArticleFooter.propTypes = {
  article: PropTypes.object.isRequired,
};
    
export default ArticleFooter;