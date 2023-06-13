"use client";

import React from "react";

import { Button } from "@src/components/ui";

interface FormTabsProps {}

const FormTabs: React.FC<FormTabsProps> = () => {
   return (
      <nav className="flex ml-auto">
         <ul className="flex w-full">
            <li>
               <Button className="" type="button" variant="ghost">
                  Edit
               </Button>
            </li>
            <li>
               <Button className="font-normal" type="button" variant="ghost">
                  Preview
               </Button>
            </li>
         </ul>
      </nav>
   );
};
export default FormTabs;
