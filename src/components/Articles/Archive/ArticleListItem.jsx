import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ArchiveArticleItem = (props) => (
   <article className="archive__item">
      <aside className="archive__item--image">
         {
            props.info.featured_media ?
            <Link to={props.info.slug}>
               <Img 
                  fixed={props.info.featured_media.localFile.childImageSharp.fixed}
                  alt={props.info.featured_media.alt_text}
                  className={'img-outer__wrapper'}
                  imgStyle={{position: 'initial'}}
               />
            </Link> : ''
         }
      </aside>
      <aside className="archive__item-details">
         <h2 className="archive__item-title">
            <Link to={props.info.slug}>{props.info.title}</Link>
         </h2>
         <h4 className="archive__item-author">{props.info.author.name}</h4>
         <span className="archive__item-date"><FontAwesomeIcon icon="clock" /> {props.info.date}</span>
      </aside>
   </article>
);

export default ArchiveArticleItem;
