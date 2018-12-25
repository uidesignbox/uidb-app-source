import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';

const FeaturedArticleImage = ({ slug, image }) => (
  <Fragment>
    <div className="featured-image__container">
      <Link to={slug}>
        <Image
          fixed={featured_media.localFile.childImageSharp.fixed}
          alt={featured_media.alt_text}
          style={{ width: '100%', height: 'inherit' }}
          imgStyle={{ position: 'initial' }}
        />
      </Link>
    </div>
    <small className="featured__article--caption" dangerouslySetInnerHTML={{ __html: featured_media.caption }}></small>
  </Fragment>
);

FeaturedArticleImage.propTypes = {
  slug: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default FeaturedArticleImage;