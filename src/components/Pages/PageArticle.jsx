import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const PageArticle = ({ image, slug, title, author, excerpt }) => (
  <article className="page__article">
    <div className="flex__container">
      <div className="page__article--image">
        {image &&
          <img src={image.url} alt={image.alt} className="img-outer__wrapper" />
        }
      </div>
      <div className="page__article-body">
        <header>
          <Link to={slug} className="page-article__title">
            <h2>{title}</h2>
          </Link>
        </header>
        <section className="page-article__meta">
          <span className="byline">By</span>
          {/* <span className="page-article__author">{author.name}</span> */}
        </section>
        <div className="page-article__excerpt" dangerouslySetInnerHTML={{ __html: excerpt }} ></div>
      </div>
    </div>
  </article>
);

PageArticle.propTypes = {
  image: PropTypes.object,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  excerpt: PropTypes.string,
};

export default PageArticle;
