import { Post, User } from "@prisma/client";

export interface PostObject extends Post {
   user: User;
}
