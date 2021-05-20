import React from 'react';
import ReactDom from 'react-dom';
import './modal.css';

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;

  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .7',
    zIndex: 1000
  }

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES}></div>
      <div className="modal-style">
        {children}
        <button onClick={onClose}>Close Modal</button>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default Modal
