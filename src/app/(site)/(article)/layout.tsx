"use client";

import React from "react";

import Sidebar from "@src/components/sidebar";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
   return <Sidebar>{children}</Sidebar>;
};
export default Layout;
