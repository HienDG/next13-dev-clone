import { cache } from "react";

import prismaClient from "@src/libs/prisma";
import getSession from "./getSession";

const getCurrentUser = cache(async () => {
   try {
      const session = await getSession();

      if (!session?.user?.email) return null; // throw new Error("You are not currently logged in.");

      const currentUser = await prismaClient.user.findUnique({
         where: {
            email: session.user.email,
         },
      });

      if (!currentUser) return null; // throw new Error("The email doesn't exist");

      return currentUser;
   } catch (error: unknown) {
      return null;
   }
});

export default getCurrentUser;
