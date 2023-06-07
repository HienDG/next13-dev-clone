import NextAuth from "next-auth";

import { authOptions } from "@src/libs/auth";

const handler = NextAuth(authOptions);

export { handler as POST, handler as GET };
