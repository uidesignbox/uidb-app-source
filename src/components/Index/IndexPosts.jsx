import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.scss';

const IndexPosts = (props) => {
    const image = props.info.featured_media
    return(
        <article className="index__article">
            <section className="article__image-container">
               <Link to={`/${props.info.slug}`}>
                { image !== null ?
                    <Img 
                        fixed={image.localFile.childImageSharp.fixed}
                        alt={image.alt_text}
                        className={ 'img-outer__wrapper' }
                        imgStyle={{ position: 'initial' }}
                    /> : null
                }
               </Link>
            </section>
            <div className="index-article__body">
               <aside>
                  <h4 className="index-article__category">
                     {
                        props.info.categories ?
                           props.info.categories[0].name : null
                     }
                  </h4>
                  <Link to={`/${props.info.slug}`}>
                     <h2 className="index-article__title">{ props.info.title }</h2>
                  </Link>
               </aside>
               <div className="index-article__content">
                  <p dangerouslySetInnerHTML={{ __html: props.info.excerpt }} ></p>
                  <Link to={`/${props.info.slug}`}>
                    <span className="index-article__more--btn">
                        Read { props.info.type === 'post' ? 'Article': 'more' }
                        <FontAwesomeIcon icon="caret-right" />
                    </span>
                  </Link>
               </div>
            </div>
        </article>
    );
};

export default IndexPosts;
