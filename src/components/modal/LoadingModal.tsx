"use client";

import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { SyncLoader } from "react-spinners";
import clsx from "clsx";

interface LoadingModalProps extends React.PropsWithChildren {
   loading?: boolean;
}

const LoadingModal: React.FC<LoadingModalProps> = ({ loading, children }) => {
   return (
      <Fragment>
         <div
            className={clsx("w-full h-full", {
               ["hidden"]: !children,
            })}
         >
            {children}
         </div>

         <Transition appear show={loading} as={Fragment}>
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
                        <Dialog.Panel className="">
                           <SyncLoader color="white" />
                        </Dialog.Panel>
                     </Transition.Child>
                  </div>
               </div>
            </Dialog>
         </Transition>
      </Fragment>
   );
};

export default LoadingModal;
