export type ModalType = "ADD_GROUP" | "VIEW_DETAIL";

export interface ModalItem {
  type: ModalType;
  component: React.ReactNode;
}

export interface ModalState {
  modals: ModalItem[];
}
