import { NextPage } from "next";
import React from "react";

import { AuthModal } from "@src/components/modal";

const Layout: NextPage<React.PropsWithChildren> = ({ children }) => {
   return <AuthModal>{children}</AuthModal>;
};

export default Layout;
