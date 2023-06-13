import { NextResponse, NextRequest } from "next/server";

import prismaClient from "@src/libs/prisma";
import { getCurrentUser } from "@src/libs/actions";

export const GET = async (request: NextRequest) => {
   try {
      const page = request.nextUrl.searchParams.get("page") as string;

      const take = Number(page) * 5;
      const skip = Number(page) === 1 ? 0 : (Number(page) - 1) * 5;

      const posts = await prismaClient.post.findMany({
         orderBy: {
            created_at: "desc",
         },
         include: {
            user: true,
         },
         skip,
         take,
      });

      return NextResponse.json(posts);
   } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.log(error);
      return [];
   }
};

export const POST = async (request: Request) => {
   try {
      const data = await request.json();

      const { image, title, body } = data;

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
   } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.log(error);
      return null;
   }
};
