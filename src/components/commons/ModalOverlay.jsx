import React from 'react';
import "./modal.scss";

const ModalOverlay = ({children}) => (
   <div className="modal-overlay">{children}</div>
);

export default ModalOverlay;
