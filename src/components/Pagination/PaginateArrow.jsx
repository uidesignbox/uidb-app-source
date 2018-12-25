import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from "prop-types";

const PaginateArrow = ({ test, url, text, icon }) => {
  if (test) {
    return (
      <Link to={url} className="paginate__arrow-btn">
        <FontAwesomeIcon icon={`${icon}`} />
      </Link>
    );
  };
};

PaginateArrow.propTypes = {
  test: PropTypes.bool,
  url: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

export default PaginateArrow;
