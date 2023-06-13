import { Post, User, Comment } from "@prisma/client";

export interface CommentObject extends Comment {
   user: User;
}
