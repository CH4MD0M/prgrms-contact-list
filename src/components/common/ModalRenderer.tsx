import { useContext } from "react";

import {
  ModalDispatchContext,
  ModalStateContext,
} from "context/modal/ModalContext";

import Modal from "./Modal";

const ModalRenderer: React.FC = () => {
  const state = useContext(ModalStateContext);
  const dispatch = useContext(ModalDispatchContext);

  if (!state || !dispatch) {
    return null;
  }

  return (
    <>
      {state.modals.map((modal) => (
        <Modal key={modal.type} onClose={() => dispatch.close(modal.type)}>
          {modal.component}
        </Modal>
      ))}
    </>
  );
};

export default ModalRenderer;
