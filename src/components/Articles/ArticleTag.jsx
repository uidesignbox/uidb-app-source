import React from 'react';
import { Link } from 'gatsby';

const ArticleTag = (props) => (
   <Link to={`/tag/${props.tags.slug}`}>
      <span className="article-footer__tag">{ props.tags.name }</span>
   </Link>
);

export default ArticleTag;
