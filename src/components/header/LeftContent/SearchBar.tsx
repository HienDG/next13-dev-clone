"use client";

import React from "react";

import { BsSearch } from "react-icons/bs";

import { FormController } from "@src/components/form";

const SearchBar: React.FC = () => {
   const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
   };

   return (
      <div className="max-w-[420px] md:flex flex-1 mx-4 hidden">
         <FormController className="w-full h-10" onClick={handleSubmit}>
            <div className="relative flex items-center h-full overflow-hidden">
               <input
                  type="text"
                  className="w-full h-full transition-colors duration-150 rounded-lg input input-bordered focus:input-primary"
                  placeholder="Search..."
                  autoComplete="off"
               />
               <button className="absolute left-auto px-2 cursor-default inset-1" type="submit">
                  <BsSearch className="w-6 h-6" />
               </button>
            </div>
         </FormController>
      </div>
   );
};
export default SearchBar;
