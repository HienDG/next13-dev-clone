import type { AuthOptions } from "next-auth";

import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import prismaClient from "@src/libs/prisma";

type Adapter = Required<AuthOptions["adapter"]>;

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET as string;

const GITHUB_ID = process.env.GITHUB_ID as string;
const GITHUB_SECRET = process.env.GITHUB_SECRET as string;

export const authOptions: AuthOptions = {
   adapter: PrismaAdapter(prismaClient) as Adapter,
   pages: {
      signIn: "/sign-in",
   },
   providers: [
      GoogleProvider({
         clientId: GOOGLE_CLIENT_ID,
         clientSecret: GOOGLE_CLIENT_SECRET,
      }),
      GitHubProvider({
         clientId: GITHUB_ID,
         clientSecret: GITHUB_SECRET,
      }),
      CredentialsProvider({
         name: "credentials",
         credentials: {
            email: { label: "email", type: "text" },
            password: { label: "password", type: "password" },
         },

         async authorize(credentials) {
            if (!credentials?.email || !credentials?.password)
               throw new Error("Invalid credentials");

            const user = await prismaClient.user.findUnique({
               where: {
                  email: credentials.email,
               },
            });

            if (!user || !user?.password) throw new Error("Invalid credentials");

            const isCorrectPassword = await bcrypt.compare(credentials.password, user.password);

            if (!isCorrectPassword) throw new Error("Invalid credentials");

            return {
               email: user.email,
               name: user.name,
               id: user.id,
               image: user.image,
            };
         },
      }),
   ],
   secret: process.env.NEXTAUTH_SECRET,
   debug: process.env.NODE_ENV === "development",
   session: {
      strategy: "jwt",
      maxAge: 24 * 60 * 60, // 1 day
   },
};
