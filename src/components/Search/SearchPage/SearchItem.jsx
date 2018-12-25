import React from 'react';
import { Link } from 'gatsby';

const SearchItem = (props) => {
   const item = props.info;
   return(
      <article className="page__article search__item">
         <div className="flex__container">
            {/* <aside className="page__article--image">
               <img src={item._embedded['wp:featuredmedia'][0].media_details.file} alt=""/>
            </aside> */}
            <aside className="page__article-body">
               <span>{item.type === 'post' ? 'Article': item.type}</span>
               <header>
                  <Link to={item.slug} className="page-article__title">
                     <h2>{item.title.rendered}</h2>
                  </Link>
               </header>
               <section className="page-article__meta">
                  <span className="byline">By</span>
                  <span className="page-article__author">{item._embedded.author[0].name}</span>
               </section>
               <div className="search-article__excerpt" dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} ></div>
            </aside>
         </div>
      </article>
   )
};

export default SearchItem;