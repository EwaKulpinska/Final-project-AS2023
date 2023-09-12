import React from "react";

const Modal = ({ onCloseModal, name }) => {
  const handleButtonClick = () => {
    onCloseModal();
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal_content">
          <div>
            <h1>Thanks for subscribing!</h1>
          </div>
          <div>
            <p className="modal-text">
              A confirmation email has been sent to <b>{name}</b>. Please open
              it and click the button inside to confirm your subscription.
            </p>
          </div>
          <div>
            <button className="modal-button" onClick={handleButtonClick}>
              Dismiss Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
