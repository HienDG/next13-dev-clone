import React from "react";

import { ArticleLayout } from "@src/layouts";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
   return <ArticleLayout>{children}</ArticleLayout>;
};
export default Layout;
