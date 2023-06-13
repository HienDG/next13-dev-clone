"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import { User } from "@prisma/client";

import { USER_URL } from "@src/utils/constants";

interface AuthorBarProps {
   user: User;
   created_at?: Date;
}

const AuthorBar: React.FC<AuthorBarProps> = ({ user, created_at }) => {
   return (
      <div className="flex items-center justify-between mb-2">
         <Link href={`${USER_URL}/${user.id}`} className="flex items-center gap-2 text-sm">
            <div>
               <div className="w-9 h-9">
                  <Image
                     src={user.image || "/images/user_placeholder.png"}
                     alt="image"
                     width={36}
                     height={36}
                     className="object-cover w-full h-full rounded-full"
                  />
               </div>
            </div>
            <div>
               <div className="font-bold">{user.name}</div>
               <span>
                  {moment(created_at).format("MMMM Do")} ({moment(created_at).fromNow()})
               </span>
            </div>
         </Link>
      </div>
   );
};
export default AuthorBar;
