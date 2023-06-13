"use client";

import { Fragment, useCallback } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";

import { AiOutlineClose } from "react-icons/ai";

import { IconButton, Button } from "@src/components/ui";

import { HOME_URL } from "@src/utils/constants";

const AuthModal = () => {
   const router = useRouter();
   const onClose = useCallback(() => {}, []);

   return (
      <Transition appear show as={Fragment}>
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
                              Log in to continue
                           </h2>
                           <IconButton icon={AiOutlineClose} onClick={onClose} variant="ghost" />
                        </Dialog.Title>
                     </Dialog.Panel>
                  </Transition.Child>
               </div>
            </div>
         </Dialog>
      </Transition>
   );
};

export default AuthModal;
