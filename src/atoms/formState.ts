import { atom } from "recoil";

interface FormStore {
   image: string | null;
   title: string;
   body: string;
}

const initialStore: FormStore = {
   image: null,
   title: "",
   body: "",
};

const formState = atom<FormStore>({
   key: "formState",
   default: initialStore,
});

export default formState;
