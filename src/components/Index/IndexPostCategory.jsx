import React from 'react';
import PropTypes from 'prop-types';

const IndexPostCategory = ({ category }) => (
  <span className="index-article__category">{category}</span>
);

IndexPostCategory.propTypes = {
  category: PropTypes.string,
};

export default IndexPostCategory;