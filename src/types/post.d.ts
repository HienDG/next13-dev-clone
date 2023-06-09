import { Post, User, Comment } from "@prisma/client";

export interface PostObject extends Post {
   user: User;
   comments: Comment[];
}
