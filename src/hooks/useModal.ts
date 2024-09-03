import { useContext } from "react";
import { ModalDispatchContext } from "context/modal/ModalContext";

export const useModal = () => {
  const dispatch = useContext(ModalDispatchContext);

  if (dispatch === undefined) {
    throw new Error("useModal은 ModalProvider 내부에서 사용되어야 합니다.");
  }

  return {
    openModal: dispatch.open,
    closeModal: dispatch.close,
  };
};
