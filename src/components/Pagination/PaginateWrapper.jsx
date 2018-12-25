import React from 'react';
import PropTypes from 'prop-types';

const PaginateWrapper = ({ children }) => (
  <aside className="pagination__wrapper">
    <ul className="index__paginate-list">
      {children}
    </ul>
  </aside>
);

PaginateWrapper.propTypes = {
  children: PropTypes.any.isRequired
};

export default PaginateWrapper;
