"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import { useSetRecoilState } from "recoil";

import { modalState } from "@src/atoms";

const Logo: React.FC = () => {
   const setModalStateValue = useSetRecoilState(modalState);

   const onOpen = useCallback(
      (event: React.MouseEvent<HTMLDivElement>) => {
         event.stopPropagation();

         return setModalStateValue({ view: "editor", isOpen: true });
      },
      [setModalStateValue]
   );

   return (
      <div onClick={onOpen} className="w-[50px] h-[40px] md:block hidden mr-4 cursor-pointer">
         <Image
            src="/images/logo.png"
            alt="logo"
            width={50}
            height={40}
            className="inline-block object-contain w-full h-full max-w-full align-middle outline-0"
         />
      </div>
   );
};
export default Logo;
