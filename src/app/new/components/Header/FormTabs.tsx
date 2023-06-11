"use client";

import React from "react";

import { Button } from "@src/components/ui";

interface FormTabsProps {}

const FormTabs: React.FC<FormTabsProps> = () => {
   return (
      <nav className="flex ml-auto">
         <ul className="flex w-full">
            <li>
               <Button className="" variant="ghost">
                  Edit
               </Button>
            </li>
            <li>
               <Button className="font-normal" variant="ghost">
                  Preview
               </Button>
            </li>
         </ul>
      </nav>
   );
};
export default FormTabs;
