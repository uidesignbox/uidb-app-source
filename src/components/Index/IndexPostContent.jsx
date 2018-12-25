import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IndexPostContent = ({ content, slug }) => (
  <div className="index-article__content">
    <p dangerouslySetInnerHTML={{ __html: content }} ></p>
    <Link to={`/${slug}`}>
      <span className="index-article__more--btn">
        Read more
        <FontAwesomeIcon icon="caret-right" aria-hidden="true" />
      </span>
    </Link>
  </div>
);

IndexPostContent.propTypes = {
  content: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
};

export default IndexPostContent;