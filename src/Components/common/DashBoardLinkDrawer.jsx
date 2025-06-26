import React from 'react';
import DashBoardLink from './DashBoardLink';
import { IoMdClose } from 'react-icons/io'; // React Icons close icon

const drawerStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '80vw',
  maxWidth: 320,
  height: '100vh',
  background: '#fff',
  boxShadow: '2px 0 8px rgba(0,0,0,0.15)',
  zIndex: 2000,
  transition: 'transform 0.3s ease',
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
};

const closeBtnStyle = {
  alignSelf: 'flex-end',
  background: 'none',
  border: 'none',
  fontSize: 28,
  cursor: 'pointer',
  marginBottom: '1rem',
};

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0,0,0,0.3)',
  zIndex: 1999,
};

const DashBoardLinkDrawer = ({ open, onClose }) => {
  // if (!open) return null;

  return (
    <>
      <div style={overlayStyle} onClick={onClose} />
      <div style={drawerStyle}>
        <button style={closeBtnStyle} onClick={onClose} aria-label="Close drawer">
          <IoMdClose />
        </button>
        <DashBoardLink />
      </div>
    </>
  );
};

export default DashBoardLinkDrawer;