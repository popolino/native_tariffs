import { createPortal } from "react-dom";
import React, { useMemo } from "react";
import Fade from "../fade/Fade";

const Modal = ({ children, open, onClose }) => {
  const modalRoot = document.getElementById("modal-root");
  const modalElement = useMemo(() => document.createElement("div"), []);

  React.useEffect(() => {
    modalRoot.appendChild(modalElement);

    return () => {
      modalRoot.removeChild(modalElement);
    };
  }, [modalElement, modalRoot]);

  return createPortal(
    <Fade in={open}>
      <div className="modal-overlay" onClick={onClose}>
        <div onClick={(event) => event.stopPropagation()}>{children}</div>
      </div>
    </Fade>,
    modalElement
  );
};

export default Modal;
