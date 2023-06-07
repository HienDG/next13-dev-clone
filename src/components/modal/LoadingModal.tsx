"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { SyncLoader } from "react-spinners";

const LoadingModal = () => {
   return (
      <>
         <Transition appear show as={Fragment}>
            <Dialog as="div" className="relative z-1000" onClose={() => {}}>
               <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
               >
                  <div className="fixed inset-0 bg-base-100 z-200" />
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
                        <Dialog.Panel className="">
                           <SyncLoader color="blue" />
                        </Dialog.Panel>
                     </Transition.Child>
                  </div>
               </div>
            </Dialog>
         </Transition>
      </>
   );
};

export default LoadingModal;
