import React from 'react';
import Img from 'gatsby-image';


const ArticleHeader = (props) => (
   <section className="article__header-section">
      <div className="article__header-wrapper">
         <h4 className="article__category">{ props.info.categories[0].name }</h4>
         <h1 className="article__title">{ props.info.title }</h1>
         <aside className="article__header-credits">
            <span>By</span>
            <span className="article__header-author">{ props.info.author.name }</span>
            <p className="article__header-date">{ props.info.date }</p>
         </aside>
      </div>
      <Img
         fixed={props.info.featured_media.localFile.childImageSharp.fixed}
         alt={props.info.featured_media.alt_text}
         className={'article__featured-image'}
         imgStyle={{position: 'initial'}}
      />
      <div className="article__featured--caption" dangerouslySetInnerHTML={{__html: props.info.featured_media.caption}}></div>
   </section>
);

export default ArticleHeader;
