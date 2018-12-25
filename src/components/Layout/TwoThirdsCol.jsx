import React from 'react';
import '../../sass/layout-structure.scss';

const TwoThirdsCol = ({children}) => (
   <div className="col-two-thirds">
      {children}
   </div>
);

export default TwoThirdsCol;
