"use client";

import React, { useCallback } from "react";

import { AiOutlineClose } from "react-icons/ai";
import { useSetRecoilState } from "recoil";

import { IconButton } from "@src/components/ui";

import { modalState } from "@src/atoms";

const CloseButton: React.FC = () => {
   const setModalStateValue = useSetRecoilState(modalState);

   const onOpen = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
         event.stopPropagation();

         return setModalStateValue({ view: "editor", isOpen: true });
      },
      [setModalStateValue]
   );

   return (
      <div className="ml-2 lg:ml-0 lg:absolute right-2 top-2">
         <IconButton
            icon={AiOutlineClose}
            type="button"
            variant="ghost"
            className="btn-circle"
            onClick={onOpen}
         />
      </div>
   );
};
export default CloseButton;
