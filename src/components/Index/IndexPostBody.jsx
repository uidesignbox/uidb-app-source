import React from 'react';
import PropTypes from 'prop-types';
import IndexPostCategory from './IndexPostCategory';
import IndexPostTitle from './IndexPostTitle';
import IndexPostContent from './IndexPostContent';

const IndexPostBody = ({ post }) => (
  <div className="index-article__body">
    <aside>
      {post && post.categories.map((item, i) =>
        <IndexPostCategory key={i} category={item} />
      )}
      <IndexPostTitle title={post.title} slug={post.slug} />
      <IndexPostContent content={post.excerpt} slug={post.slug} />
    </aside>
  </div>
);

IndexPostBody.propTypes = {
  post: PropTypes.object
};

export default IndexPostBody;