import React, { PureComponent } from 'react';
import IndexPostImage from './IndexPostImage';
import IndexPostBody from './IndexPostBody';

import './index.scss';

class IndexPosts extends PureComponent {
  render() {
    return (
      <article className="index__article">
        <IndexPostImage slug={post.slug} image={post.image} />
        <IndexPostBody post={post} />
      </article>
    )
  }
};

export default IndexPosts;