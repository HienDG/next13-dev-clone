"use client";

import React, { Fragment, useCallback, useMemo } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { useRouter } from "next/navigation";

import { AiOutlineClose } from "react-icons/ai";

import { IconButton, Button } from "@src/components/ui";

import { modalState } from "@src/atoms";
import { HOME_URL } from "@src/utils/constants";

interface CloseEditorModalProps extends React.PropsWithChildren {}

const CloseEditorModal: React.FC<CloseEditorModalProps> = ({ children }) => {
   const [modalStateValue, setModalStateValue] = useRecoilState(modalState);
   const router = useRouter();

   const onClose = useCallback(
      () => setModalStateValue((prev) => ({ ...prev, isOpen: false })),
      [setModalStateValue]
   );

   const onNavigate = useCallback(() => {
      // navigate to home page
      router.push(HOME_URL);

      // close modal
      return onClose();
   }, [onClose, router]);

   const isOpenEditorModal = useMemo(
      () => modalStateValue.isOpen && modalStateValue.view === "editor",
      [modalStateValue.isOpen, modalStateValue.view]
   );

   return (
      <Fragment>
         <section className="w-full h-full">{children}</section>

         <Transition appear show={isOpenEditorModal} as={Fragment}>
            <Dialog as="div" className="relative z-1000" onClose={onClose}>
               <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
               >
                  <div className="fixed inset-0 bg-neutral bg-opacity-70 z-200" />
               </Transition.Child>

               <div className="fixed inset-0 overflow-y-auto z-500">
                  <div className="flex items-center justify-center min-h-full p-4 text-center">
                     <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                     >
                        <Dialog.Panel className="w-full max-w-2xl bg-base-100 rounded-xl">
                           <Dialog.Title
                              as="header"
                              className="flex items-center h-16 p-2 pl-4 border-b border-solid md:pl-8 border-b-gray-200"
                           >
                              <h2 className="flex-1 text-xl font-semibold text-start max-md:text-lg">
                                 You have unsaved changes
                              </h2>
                              <IconButton icon={AiOutlineClose} onClick={onClose} variant="ghost" />
                           </Dialog.Title>

                           <div className="p-4 md:p-8">
                              <p className="text-start">
                                 You`ve made changes to your post. Do you want to navigate to leave
                                 this page?
                              </p>

                              <div className="flex gap-2 pt-5 join justify-self-start max-sm:join-vertical">
                                 <Button
                                    variant="error"
                                    className="text-white"
                                    onClick={onNavigate}
                                 >
                                    Yes, leave the page
                                 </Button>
                                 <Button variant="neutral" onClick={onClose}>
                                    No, keep editing
                                 </Button>
                              </div>
                           </div>
                        </Dialog.Panel>
                     </Transition.Child>
                  </div>
               </div>
            </Dialog>
         </Transition>
      </Fragment>
   );
};

export default CloseEditorModal;
