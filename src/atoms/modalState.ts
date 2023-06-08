import { atom } from "recoil";

type ModalView = "sign-out";

interface ModalStore {
   view: ModalView | null;
   isOpen: boolean;
}

const initialStore: ModalStore = {
   view: null,
   isOpen: false,
};

const modalState = atom<ModalStore>({
   key: "modalState",
   default: initialStore,
});

export default modalState;
