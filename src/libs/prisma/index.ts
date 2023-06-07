/* eslint-disable no-unused-vars */
import { PrismaClient } from "@prisma/client";

declare global {
   namespace NodeJS {
      interface Global {}
   }
}

// Add Prisma to the NodeJS Global type

interface CustomNodeJSGlobal extends NodeJS.Global {
   prisma: PrismaClient;
}

// Prevent multiple instances of Prisma Client in DEVELOPMENT
declare const global: CustomNodeJSGlobal;

const prismaClient = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") global.prisma = prismaClient;

export default prismaClient;
