import React from 'react';
import PropTypes from 'prop-types';
import CopyMessage from '../Articles/CopyMessage';
import ArticleShareIcons from '../Articles/ArticleShareIcons';

const ArticleFooterShare = ({ handleCopyLink, copiedLink, path, article }) => (
  <section className="article-footer__share" onBlur={handleCopyLink}>
    <div className="section">
      <h4>Share Article</h4>
      {copiedLink ? <CopyMessage /> : null}
      <ArticleShareIcons
        article={article}
        copyLink={handleCopyLink}
        path={path}
      />
    </div>
  </section>
);

ArticleFooterShare.propTypes = {
  handleCopyLink: PropTypes.func,
  copiedLink: PropTypes.bool,
  path: PropTypes.string,
};

export default ArticleFooterShare;