import React from "react";
import { Button } from "../button";

interface ModalProps extends React.PropsWithChildren {
  width?: number;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  width,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="modal modal-open">
        <div
          className={`modal-box w-full ${
            width ? `max-w-[${width}px]` : "max-w-[1024px]"
          }`}
        >
          {/* Modal Header */}
          <div className="modal-header flex justify-between items-center">
            <h3 className="text-2xl">{title}</h3>
            <button
              className="btn btn-sm btn-circle btn-ghost"
              onClick={onClose}
            >
              ✕
            </button>
          </div>

          {/* Modal Body */}
          <div className="modal-content mt-4">{children}</div>

          {/* Modal Footer */}
          <div className="modal-action">
            <Button variant={"primary"} onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
