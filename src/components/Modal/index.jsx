import React from "react";
import "./modal.css";
const Modal = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
      <div className="modal-header">
        <span className="modal-close" onClick={closeModal}><i className="fas fa-times"></i></span>
      </div>
        <img src="/assets/modalframe (1).png" alt="" />
        <h2>Burden sent successfully.</h2>
        <p> We will get back to you as soon as possible.</p>
      </div>
    </div>
  );
};

export default Modal;
