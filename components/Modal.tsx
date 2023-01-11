import React, {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";

type Props = PropsWithChildren<{
  open: boolean;
  setOpen: (value: boolean) => void;
}>;

const Modal: FunctionComponent<Props> = ({ children, open, setOpen }) => {
  return (
    <div className={open ? "modal-container" : "modal-container modal-close"}>
      <div
        onClick={() => setOpen(false)}
        className={open ? "overlay" : "overlay modal-close"}
      ></div>
      <div className={open ? "modal-content" : "modal-content modal-close"}>
        <button onClick={() => setOpen(false)} className="btn-close-modal">
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
