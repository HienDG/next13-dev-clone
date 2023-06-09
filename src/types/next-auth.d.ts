/* eslint-disable no-unused-vars */
import { DefaultSession } from "next-auth";

declare module "next-auth" {
   interface Session {
      user: {
         username?: string | null;
         idToken?: string;
      } & DefaultSession["user"];
   }

   interface User {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      username?: string | null;
      id_token?: string | null;
   }
}

declare module "next-auth/jwt" {
   /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
   interface JWT {
      /** OpenID ID Token */
      idToken?: string;
      username?: string | null;
   }
}
