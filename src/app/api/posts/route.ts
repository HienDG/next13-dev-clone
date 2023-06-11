import { NextResponse } from "next/server";

import prismaClient from "@src/libs/prisma";
import { getCurrentUser } from "@src/libs/actions";

export const POST = async (request: Request) => {
   try {
      const data = await request.json();

      const { image, title, body } = data;

      console.log(data);

      const currentUser = await getCurrentUser();

      if (!currentUser) return null;

      const newPost = await prismaClient.post.create({
         data: {
            userId: currentUser.id,
            title,
            body,
            coverImage: image,
         },
      });

      return NextResponse.json(newPost);
   } catch (error) {
      return null;
   }
};
