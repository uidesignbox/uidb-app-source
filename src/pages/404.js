import React from 'react'
import { Link } from 'gatsby';
import logo from '../assets/logo_transparent.png';
import '../components/Index/index.scss';


const NotFoundPage = () => (
  <div className="not-found__landing">
    <div className="not-found__logo">
      <Link to={'/'}>
        <img src={logo} alt={`Brand logo of UiDesignBox`}/>
      </Link>
    </div>
    <div className="not-found__body">
      <h1>Oops!</h1>
      <h3>We didn't find a page you searched for.</h3>
      <p>Error code: 404</p>
      <span>Here are others links that can make uspan for it:</span>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/search'}>Search</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>
        <li>
          <Link to={'/archive'}>All Articles</Link>
        </li>
      </ul>
    </div>
  </div>
);

export default NotFoundPage
