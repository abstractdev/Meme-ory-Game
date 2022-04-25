import React, { useEffect, useRef } from "react";
import "../Styles/Modal.css";

function Modal({ modalIsVisible, setModalIsVisible, modalScore }) {
  const modalRef = useRef();
  function clickOutsideFunction() {
    const handleClickOutside = (event) => {
      if (
        modalIsVisible &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        setModalIsVisible(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }
  useEffect(() => {
    clickOutsideFunction();
  }, [modalIsVisible]);

  return (
    <div className="modal-container">
      <div className="modal" ref={modalRef}>
        <div className="modal-text">Your Score This Round</div>
        <div className="modal-score">{modalScore}</div>
        <button
          className="modal-button"
          onClick={() => setModalIsVisible(false)}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
