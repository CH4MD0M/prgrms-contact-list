import { createContext } from "react";
import { ModalType, ModalState, ModalItem } from "types/modal";

export const ModalStateContext = createContext<ModalState | undefined>(
  undefined
);
export const ModalDispatchContext = createContext<
  | {
      open: (modal: ModalItem) => void;
      close: (modalType: ModalType) => void;
    }
  | undefined
>(undefined);
