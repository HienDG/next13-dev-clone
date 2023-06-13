import { cache } from "react";

import prismaClient from "@src/libs/prisma";

const getCurrentPost = cache(async (postId: string) => {
   try {
      const post = await prismaClient.post.findUnique({
         where: {
            id: postId,
         },
         include: {
            user: true,
         },
      });

      if (!post) return null;

      return post;
   } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.error(error);
      return null;
   }
});

export default getCurrentPost;
