"use client";

import React, { Fragment, useCallback, useMemo } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useRecoilValue, useResetRecoilState } from "recoil";
import clsx from "clsx";

import { AiOutlineClose } from "react-icons/ai";

import { IconButton, Button } from "@src/components/ui";

import { SIGN_IN_URL, SIGN_UP_URL } from "@src/utils/constants";
import { modalState } from "@src/atoms";

interface AuthModalProps extends React.PropsWithChildren {}

const AuthModal: React.FC<AuthModalProps> = ({ children }) => {
   const router = useRouter();
   const modalStateValue = useRecoilValue(modalState);
   const resetModalStateValue = useResetRecoilState(modalState); //  rest value of modal state

   const onClose = useCallback(() => resetModalStateValue(), [resetModalStateValue]); //

   const onNavigate = useCallback((path: string) => router.push(path), [router]);

   const isOpen = useMemo(
      () => modalStateValue.isOpen && modalStateValue.view === "un-auth",
      [modalStateValue.isOpen, modalStateValue.view]
   );

   return (
      <Fragment>
         <div
            className={clsx("w-full h-full", {
               ["hidden"]: !children,
            })}
         >
            {children}
         </div>

         <Transition appear show={isOpen} as={Fragment}>
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
                  <div className="flex items-center justify-center min-h-full text-center sm:p-4">
                     <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                     >
                        <Dialog.Panel className="w-full sm:max-w-2xl max-sm:h-screen bg-base-100 sm:rounded-xl">
                           <Dialog.Title
                              as="header"
                              className="flex items-center h-16 p-2 pl-4 border-b border-solid md:pl-8 border-b-gray-200"
                           >
                              <h2 className="flex-1 text-xl font-semibold text-start max-md:text-lg">
                                 Log in to continue
                              </h2>
                              <IconButton icon={AiOutlineClose} onClick={onClose} variant="ghost" />
                           </Dialog.Title>

                           <div className="max-h-full p-3 md:p-8">
                              <div className="w-f">
                                 <div className="flex flex-col gap-5">
                                    <div className="w-20 h-20 mb-3">
                                       <Image
                                          src="/images/devlogo-pwa-512.webp"
                                          alt="logo"
                                          width={80}
                                          height={80}
                                          className="w-full h-full rounded-lg -rotate-12"
                                       />
                                    </div>
                                    <div>
                                       <p className="text-gray-700">
                                          We`re a place where coders share, stay up-to-date and grow
                                          their careers.
                                       </p>
                                    </div>
                                    <div className="items-center w-full gap-4 px-12 pb-4 join join-vertical max-md:px-4">
                                       <Button
                                          variant="primary"
                                          className="w-full h-12"
                                          onClick={() => onNavigate(SIGN_IN_URL)}
                                       >
                                          Sign ip
                                       </Button>
                                       <Button
                                          variant="neutral"
                                          className="w-full h-12"
                                          onClick={() => onNavigate(SIGN_UP_URL)}
                                       >
                                          Create account
                                       </Button>
                                    </div>
                                 </div>
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

export default AuthModal;
