import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const ArticleShareIcons = ({ article, path, copyLink }) => {
  //  const excerpt = excerpt.replace(/<\/?[^>]+(>|$)/g, "");
   const excerpt = '';
   return (
      <ul className="share__icons">
         <a href={`https://twitter.com/intent/tweet?text=${excerpt}&via=uidesignbox&url=https://uidesignbox.com${path}`} target="_blank" rel="noopener noreferrer">
            <li><FontAwesomeIcon icon={['fab', 'twitter']} /></li>
         </a>
         {/* <a href={`https://www.facebook.com/sharer/sharer.php?u=https://www.uidesignbox.com${path}&picture=https://www.uidesignbox.com${article.featured_media.localFile.childImageSharp.fixed.src}/&title=${article.title}&quote=${excerpt}`} target="_blank" rel="noopener noreferrer">
            <li><FontAwesomeIcon icon={['fab', 'facebook']} /></li>
         </a> */}
         <li onClick={copyLink} data-url={path}>
            <FontAwesomeIcon icon="anchor"/>
         </li>
         {/* <a href={`mailto:?subject=${article.title}`} target="_blank" rel="noopener noreferrer">
            <li><FontAwesomeIcon icon="envelope" /></li>
         </a> */}
      </ul>
   )
};

ArticleShareIcons.propTypes = {
  article: PropTypes.object,
  path: PropTypes.string,
  copyLink: PropTypes.func,
};

export default ArticleShareIcons;
