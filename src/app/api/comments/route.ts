import { NextResponse, NextRequest } from "next/server";

import prismaClient from "@src/libs/prisma";
import { getCurrentUser } from "@src/libs/actions";

export const GET = async (request: NextRequest) => {
   try {
      const page = request.nextUrl.searchParams.get("page") as string;

      // const take = Number(page) * 5;
      // const skip = Number(page) === 1 ? 0 : (Number(page) - 1) * 5;

      const posts = await prismaClient.comment.findMany({
         orderBy: {
            created_at: "desc",
         },
         include: {
            user: true,
         },
         // skip,
         // take,
      });

      return NextResponse.json(posts);
   } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.log(error);
      return [];
   }
};

export const POST = async (request: NextRequest) => {
   try {
      const data = await request.json();

      const { body, postId } = data;

      const currentUser = await getCurrentUser();

      if (!currentUser) throw new Error("Unauthorized");

      const newComment = await prismaClient.comment.create({
         data: {
            body,
            postId,
            userId: currentUser.id,
         },
      });

      return NextResponse.json(newComment);
   } catch (error: unknown) {
      if (typeof error === "string")
         return NextResponse.json(error, {
            status: 401,
         });

      return NextResponse.json("Internal Server Error ", {
         status: 500,
      });
   }
};
