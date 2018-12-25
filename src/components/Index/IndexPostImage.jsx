import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

const IndexPostImage = ({ image, slug }) => (
  <section className="article__image-container">
    <Link to={`/${slug}`}>
      <Img
        fixed={image}
        alt={image.alt_text}
        className={'img-outer__wrapper'}
        imgStyle={{ position: 'initial' }}
      />
    </Link>
  </section>
);

IndexPostImage.propTypes = {
  image: PropTypes.object.isRequired,
  slug: PropTypes.string,
};

export default IndexPostImage;