"use client";

import { NextPage } from "next";
import React from "react";
import { useRecoilValue } from "recoil";

import { CloseModal } from "@src/components/modal";

import { modalState } from "@src/atoms";

const Layout: NextPage<React.PropsWithChildren> = ({ children }) => {
   const { view } = useRecoilValue(modalState);

   return (
      <>
         <main className="bg-base-200">{children}</main>
         <>{view === "editor" && <CloseModal />}</>
      </>
   );
};
export default Layout;
