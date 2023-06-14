import { atom } from "recoil";

type ModalView = "editor" | "un-auth";

interface ModalStore {
   view: ModalView;
   isOpen: boolean;
}

const initialStore: ModalStore = {
   view: "editor",
   isOpen: false,
};

const modalState = atom<ModalStore>({
   key: "modalState",
   default: initialStore,
});

export default modalState;
