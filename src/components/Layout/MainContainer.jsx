import React from 'react';
import '../../sass/layout-structure.scss';

const MainContainer = ({children}) => (
   <div className="main__wrapper">
      {children}
   </div>
);

export default MainContainer;
