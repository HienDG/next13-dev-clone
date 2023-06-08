"use client";

import React from "react";
import { useRecoilValue } from "recoil";

import { SignOutModal } from "@src/components/modal";

import { modalState } from "@src/atoms";

const ModalProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
   const { view } = useRecoilValue(modalState);

   return (
      <div>
         <>{children}</>

         <div>
            <>{view === "sign-out" && <SignOutModal />}</>
         </div>
      </div>
   );
};
export default ModalProvider;
