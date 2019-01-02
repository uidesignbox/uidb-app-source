import React from 'react';
import { Link } from "gatsby";
import './searchform.scss';

const SearchQuery = ({ query }) => (
  <li className="search__item">
    <aside>
      <img src="" alt="" />
    </aside>
    <aside className="search__item--body">
      <Link to="/search">
        <span>{query}</span>
      </Link>
    </aside>
  </li>
);

export default SearchQuery;