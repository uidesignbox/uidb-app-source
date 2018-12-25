import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from "prop-types";

const FeaturedArticle = ({ slug, title, author, excerpt }) => (
  <article className="featured__article">
    <section className="featured-article__body">
      <h4 className="featured-article__title">
        <Link to={slug}>{title}</Link>
      </h4>
      <div className="meta-description">
        <span className="byline"><em>By</em></span>
        <span className="featured-article__author">{author.name}</span>
      </div>
      <div className="featured-article__excerpt" dangerouslySetInnerHTML={{ __html: excerpt }}></div>
      <Link to={slug} className="featured-article__read--more">
        <FontAwesomeIcon icon="caret-right" />
        <span>Read Article</span>
      </Link>
    </section>
  </article>
);

FeaturedArticle.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.object,
  excerpt: PropTypes.string,
};

export default FeaturedArticle;
