import React from 'react';
import Modal from 'react-modal';

const ConfirmationModal = ({ isOpen, onClose, onConfirm, message }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Confirmation Modal"
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        },
        content: {
          width: '300px',
          margin: 'auto',
          borderRadius: '8px',
          border: 'none',
          padding: '20px'
        }
      }}
    >
      <h2>{message}</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button onClick={onConfirm}>OK</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
