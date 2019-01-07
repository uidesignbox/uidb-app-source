import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ArticleHeader = ({ title, author, date, image }) => (
  <section className="article__header-section">
    <div className="article__header-wrapper">
      <h1 className="article__title">{title}</h1>
      <aside className="article__header-credits">
        {author &&
          <Fragment>
            <span>By</span>
            <span className="article__header-author">{author.name}</span>
          </Fragment>
        }
        <p className="article__header-date">{date}</p>
      </aside>
    </div>
    {image &&
      <Fragment>
        <img src={image.url} alt={image.alt} className="article__featured-image" />
        <div className="article__featured--caption" dangerouslySetInnerHTML={{ __html: image.copyright }}></div>
      </Fragment>
    }
  </section>
);

ArticleHeader.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.array,
  date: PropTypes.string,
  image: PropTypes.object,
}

export default ArticleHeader;
