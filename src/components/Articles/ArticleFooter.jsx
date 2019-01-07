import React from 'react';
import PropTypes from 'prop-types';

import ArticleContributor from './ArticleContributor';
import ArticleTagContainer from './ArticleTagContainer';

const ArticleFooter = ({ date, author, tags }) => (
  <footer className="article__footer">
    <div className="left-column">
      <ArticleContributor
        date={date}
        author={author}
      />
      <ArticleTagContainer tags={tags} />
    </div>
  </footer>
);

ArticleFooter.propTypes = {
  date: PropTypes.string,
  author: PropTypes.string,
  tags: PropTypes.array
};

ArticleFooter.defaultProps = {
  author: 'Author'
}
    
export default ArticleFooter;