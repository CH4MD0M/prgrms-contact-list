import { useMemo, useState } from "react";
import { ModalDispatchContext, ModalStateContext } from "./ModalContext";
import { ModalState, ModalType, ModalItem } from "types/modal";

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [state, setState] = useState<ModalState>({ modals: [] });

  const open = (modal: ModalItem) => {
    setState((prevState) => ({
      modals: [...prevState.modals, modal],
    }));
  };

  const close = (modalType: ModalType) => {
    setState((prevState) => ({
      modals: prevState.modals.filter((modal) => modal.type !== modalType),
    }));
  };
  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <ModalStateContext.Provider value={state}>
      <ModalDispatchContext.Provider value={dispatch}>
        {children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
};
export default ModalProvider;
