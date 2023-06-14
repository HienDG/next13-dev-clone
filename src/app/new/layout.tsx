import { NextPage } from "next";
import React from "react";

import { CloseEditorModal } from "@src/components/modal";

const DraftLayout: NextPage<React.PropsWithChildren> = ({ children }) => {
   return (
      <CloseEditorModal>
         <main className="bg-base-200">{children}</main>
      </CloseEditorModal>
   );
};
export default DraftLayout;
