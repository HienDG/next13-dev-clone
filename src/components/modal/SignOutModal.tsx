"use client";

import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useResetRecoilState, useRecoilValue } from "recoil";
import { signOut } from "next-auth/react";

import { AiFillWarning } from "react-icons/ai";

import { Button } from "@src/components/ui";

import { modalState } from "@src/atoms";

interface SignOutModalProps {}

const SignOutModal: React.FC<SignOutModalProps> = () => {
   const { isOpen } = useRecoilValue(modalState);
   const resetModalStateValue = useResetRecoilState(modalState);

   const handleClose = () => resetModalStateValue();

   const handleSignOut = async () => {
      await signOut({ redirect: false });

      return handleClose();
   };

   return (
      <Transition appear show={isOpen} as={Fragment}>
         <Dialog as="div" className="relative z-1000" onClose={handleClose}>
            <Transition.Child
               as={Fragment}
               enter="ease-out duration-300"
               enterFrom="opacity-0"
               enterTo="opacity-100"
               leave="ease-in duration-200"
               leaveFrom="opacity-100"
               leaveTo="opacity-0"
            >
               <div className="fixed inset-0 bg-neutral/70 z-200" />
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
                     <Dialog.Panel className="w-full max-w-lg p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                        <Dialog.Title
                           as="h1"
                           className="text-lg font-semibold leading-6 text-gray-900"
                        >
                           Sign out Confirm
                        </Dialog.Title>

                        <div className="flex items-center gap-2 p-4">
                           <AiFillWarning className="w-6 h-6 text-red-500" />
                           <p className="text-lg text-gray-500">
                              Are you sure you want to sign out?
                           </p>
                        </div>

                        <div className="justify-end w-full gap-2 mt-4 join join-horizontal">
                           <Button variant="primary" onClick={handleSignOut}>
                              Yes, Sign out
                           </Button>
                           <Button variant="accent" onClick={handleClose}>
                              No, Cancel
                           </Button>
                        </div>
                     </Dialog.Panel>
                  </Transition.Child>
               </div>
            </div>
         </Dialog>
      </Transition>
   );
};
export default SignOutModal;
