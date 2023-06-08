import React from "react";

import { ArticleLayout } from "@src/layouts";
import { ModalProvider } from "@src/context";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
   return (
      <ArticleLayout>
         <ModalProvider>{children}</ModalProvider>
      </ArticleLayout>
   );
};
export default Layout;
