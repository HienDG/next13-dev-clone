import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prismaClient from "@src/libs/prisma";
import { SALT_ROUNDS } from "@src/utils/constants";
import { makeUsername } from "@src/utils";

export const POST = async (request: Request) => {
   try {
      const data = await request.json();
      const { email, password, username } = data;

      const hashPassword = await bcrypt.hash(password, SALT_ROUNDS);
      const newUsername = makeUsername(10);

      const newUser = await prismaClient.user.create({
         data: {
            email: email,
            password: hashPassword,
            name: username,
            username: newUsername,
         },
      });

      return NextResponse.json(newUser);
   } catch (error: unknown) {
      return NextResponse.json("Internal Server Error", {
         status: 500,
      });
   }
};
