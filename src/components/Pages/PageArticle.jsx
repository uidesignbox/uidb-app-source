import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const PageArticle = ({ image, slug, title, author, excerpt }) => (
  <article className="page__article">
    <div className="flex__container">
      <aside className="page__article--image">
        <Img
          fixed={image.localFile.childImageSharp.fixed}
          alt={image.alt_text}
          className={'img-outer__wrapper'}
          imgStyle={{ position: 'initial' }}
        />
      </aside>
      <aside className="page__article-body">
        <header>
          <Link to={slug} className="page-article__title">
            <h2>{title}</h2>
          </Link>
        </header>
        <section className="page-article__meta">
          <span className="byline">By</span>
          <span className="page-article__author">{author.name}</span>
        </section>
        <div className="page-article__excerpt" dangerouslySetInnerHTML={{ __html: excerpt }} ></div>
      </aside>
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
