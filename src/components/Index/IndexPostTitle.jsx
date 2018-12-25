import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const IndexPostTitle = ({ title, slug }) => (
  <Link to={`/${slug}`}>
    <h2 className="index-article__title">{title}</h2>
  </Link>
);

IndexPostTitle.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string,
};

export default IndexPostTitle;